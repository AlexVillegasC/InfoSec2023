const { validateHeaderValue } = require('http');
"use strict";
// Imports

const express = require("express");
const session = require("express-session");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
var cons = require('consolidate');
var path = require('path');
var app = express();

//ChatUNA
var validation = require('unalib');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// Globals
const OKTA_ISSUER_URI = "https://dev-dianinfoseg.us.auth0.com"
const OKTA_CLIENT_ID = "fcGp0f4LCbbLwI7ffrQ3Nrl0vXdHvbEe";
const OKTA_CLIENT_SECRET = "xtCr8rzGgJFvIedh_-BnRO_B2jOO59zjS9iehrd0E6TEATVq_nbsT7xNChBEMJjN";
const REDIRECT_URI = "http://localhost:3000/dashboard";
const PORT = process.env.PORT || 3000;
const SECRET = "hjsadfghjakshdfg87sd8f76s8d7f68s7f632342ug44gg423636346f"; // Dejar el secret así como está.

//  Esto se los dará Okta.
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'fcGp0f4LCbbLwI7ffrQ3Nrl0vXdHvbEe',
  issuerBaseURL: 'https://dev-dianinfoseg.us.auth0.com'
};

let oidc = new ExpressOIDC({
  issuer: OKTA_ISSUER_URI,
  client_id: OKTA_CLIENT_ID,
  client_secret: OKTA_CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  routes: { callback: { defaultRedirect: "http://localhost:3000/dashboard" } },
  scope: 'openid profile'
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// MVC View Setup
app.engine('html', cons.swig)
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

//entrada directa despues del login
app.get("/", requiresAuth(),(req,res)=>{
  if(req.oidc.isAuthenticated()){
    res.render(__dirname + '/views/index.html');
  }
});
io.on('connection', function(socket){
  // si se escucha "chat message"
  socket.on('Evento-Mensaje-Server', function(msg){
    msg = validation.validateMessage(msg);

    // volvemos a emitir el mismo mensaje
    io.emit('Evento-Mensaje-Server', msg);
  });
});
app.get("/index.html",requiresAuth(),(req,res)=>{
  if(req.oidc.isAuthenticated()){
    res.render(__dirname + '/views/index.html');
  }

})
/*http.listen(port, function(){
  console.log('listening on *:' + port);
});*/
/*

/*app.get('/', function(req, res){
  res.render(__dirname + '/views/Chat.html');
});*/

/*app.get("/",  (req, res) => {
  res.render("index");  
});*/

app.get("/dashboard", requiresAuth() ,(req, res) => {  
  if(req.oidc.isAuthenticated())
  {
    var payload = Buffer.from(req.appSession.id_token.split('.')[1], 'base64').toString('utf-8');
    const userInfo = JSON.parse(payload);
    res.render("dashboard", { user: userInfo });
  }
});

const openIdClient = require('openid-client');
openIdClient.Issuer.defaultHttpOptions.timeout = 20000;

oidc.on("ready", () => {
  console.log("Server running on port: " + PORT);
  app,http.listen(parseInt(PORT));
});

oidc.on("error", err => {
  console.error(err);
});




