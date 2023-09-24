"use strict";

// Imports
var unalibValidator = require('./unalib');
const express = require("express");
const session = require("express-session");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const { auth, requiresAuth } = require('express-openid-connect');
const cons = require('consolidate');
const path = require('path');

// Globals
const OKTA_ISSUER_URI = "https://oktachat.us.auth0.com/"
const OKTA_CLIENT_ID = "0ISWO7pq7lVnEFox7nsUayTpV1aDIhTu";
const OKTA_CLIENT_SECRET = "UGdYL_CXOmjI5sUcrOyZgZPe1E4IvTIqeKrjOXBYNq-Ag4eq0SSdcx2P5CWHELNS";
const REDIRECT_URI = "http://localhost:3000/chat";
const PORT = process.env.PORT || "3000";
const SECRET = "hjsadfghjakshdfg87sd8f76s8d7f68s7f632342ug44gg423636346f"; // Dejar el secret así como está.

//  Esto se los dará Okta.
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'http://localhost:3000',
  clientID: '0ISWO7pq7lVnEFox7nsUayTpV1aDIhTu',
  issuerBaseURL: 'https://oktachat.us.auth0.com'
};

let oidc = new ExpressOIDC({
  issuer: OKTA_ISSUER_URI,
  client_id: OKTA_CLIENT_ID,
  client_secret: OKTA_CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  // routes: { callback: { defaultRedirect: "http://localhost:3000/chat" } },
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

app.get("/chat", requiresAuth(), (req, res) => {
  var payload = Buffer.from(req.appSession.id_token.split('.')[1], 'base64').toString('utf-8');
  const userInfo = JSON.parse(payload);
  res.render("chat", { user: userInfo });
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