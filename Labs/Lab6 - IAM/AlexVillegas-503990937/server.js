"use strict";

// Imports
var unalibValidator = require('./unalib');

var xss = require("xss");
const express = require("express");
const session = require("express-session");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const { auth, requiresAuth } = require('express-openid-connect');
const cons = require('consolidate');
const path = require('path');

// Globals
const OKTA_ISSUER_URI = "https://una-infosec.us.auth0.com/";
const OKTA_CLIENT_ID = "mlIokKRjb5CGf8FbKpDIOKE36e7BjDLA";
const OKTA_CLIENT_SECRET = "YOUR_SECRET_HERE"; // Remember to hide this
const REDIRECT_URI = "http://localhost:3000/unaChat";
const PORT = process.env.PORT || "3000";
const SECRET = "hjsadfghjakshdfg87sd8f76s8d7f68s7f632342ug44gg423636346f"; // Remember to hide this
var options = {
  whiteList: {
    a: ["href", "title", "target"],
  },
};


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'http://localhost:3000',
  clientID: OKTA_CLIENT_ID,
  issuerBaseURL: OKTA_ISSUER_URI
};

let oidc = new ExpressOIDC({
  issuer: OKTA_ISSUER_URI,
  client_id: OKTA_CLIENT_ID,
  client_secret: OKTA_CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  routes: { callback: { defaultRedirect: REDIRECT_URI } },
  scope: 'openid profile'
});

let app = express();

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// MVC View Setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('models', path.join(__dirname, 'models'));
app.set('view engine', 'html');

// App middleware
app.use("/static", express.static("static"));
app.use(session({
  cookie: { httpOnly: true },
  secret: SECRET
}));

// App routes
app.use(oidc.router);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", requiresAuth(), (req, res) => {
  var payload = Buffer.from(req.appSession.id_token.split('.')[1], 'base64').toString('utf-8');
  const userInfo = JSON.parse(payload);
  res.render("dashboard", { user: userInfo });
});

app.get("/unaChat", requiresAuth(), (req, res) => {
  var payload = Buffer.from(req.appSession.id_token.split('.')[1], 'base64').toString('utf-8');
  const userInfo = JSON.parse(payload);
  res.render("unaChat", { user: userInfo });
});

const openIdClient = require('openid-client');
openIdClient.Issuer.defaultHttpOptions.timeout = 20000;

var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000", // Allow your express server's origin
    methods: ["GET", "POST"],
    credentials: true
  }
});

var chatPort = 3001; // separate port for chat

// escuchar una conexion por socket
io.on('connection', function(socket){
  // si se escucha "chat message"
  socket.on('Evento-Mensaje-Server', function(msg){    
    // Validamos el mensaje
    msg = unalibValidator.validateMessage(msg);
    xss = new xss.FilterXSS(options);

    // then apply myxss.process()
    msg = xss.process(msg);
    // volvemos a emitir el mismo mensaje
    io.emit('Evento-Mensaje-Server', msg);
  });
});



oidc.on("ready", () => {
  console.log("Auth server running on port: " + PORT);
  app.listen(parseInt(PORT));
  http.listen(chatPort, () => {
    console.log('Chat server running on port: ' + chatPort);
  });
});

oidc.on("error", err => {
  console.error(err);
});


