"use strict";

// Imports
const express = require("express");
const session = require("express-session");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
var cons = require('consolidate');
var path = require('path');
let app = express();

// Globals
const OKTA_ISSUER_URI = "https://dev-cortes.us.auth0.com/"
const OKTA_CLIENT_ID = "wHk22txEZtuyvSP9WiJbPDIDs55cdwbi";
const OKTA_CLIENT_SECRET = "Zkc5NfwkVj_wfWfey2G911Ug7nY8hkEO1ijPlau97xKQk2bcSLgLPnqLrsCfiQNY";
const REDIRECT_URI = "http://localhost:3000/dashboard";
const PORT = process.env.PORT || "3000";
const SECRET = "hjsadfghjakshdfg87sd8f76s8d7f68s7f632342ug44gg423636346f"; // Dejar el secret así como está.

//  Esto se los dará Okta.
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'wHk22txEZtuyvSP9WiJbPDIDs55cdwbi',
  issuerBaseURL: 'https://dev-cortes.us.auth0.com'
};

let oidc = new ExpressOIDC({
  issuer: OKTA_ISSUER_URI,
  client_id: OKTA_CLIENT_ID,
  client_secret: OKTA_CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  routes: { callback: { defaultRedirect: "localhost:3000/dashboard" } },
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

app.get("/",  (req, res) => {
  res.render("index");  
});

app.get("/dashboard", requiresAuth() ,(req, res) => {  
  // if(req.oidc.isAuthenticated())
  // {
    var payload = Buffer.from(req.appSession.id_token.split('.')[1], 'base64').toString('utf-8');
    const userInfo = JSON.parse(payload);
    res.render("dashboard.html", { user: userInfo });
  //}
});

app.get("/chat", requiresAuth() ,(req, res) => {  
  if(req.oidc.isAuthenticated())
  {
    var payload = Buffer.from(req.appSession.id_token.split('.')[1], 'base64').toString('utf-8');
    const userInfo = JSON.parse(payload);
    res.render("chat.html", { user: userInfo });
  }
});

const openIdClient = require('openid-client');
openIdClient.Issuer.defaultHttpOptions.timeout = 20000;

oidc.on("ready", () => {
  console.log("Server running on port: " + PORT);
  app.listen(parseInt(PORT));
});

oidc.on("error", err => {
  console.error(err);
});