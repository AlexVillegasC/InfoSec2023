// libreria de express JS
var express = require('express');

// variable que controla Express
var app = express();

// declara el folder public como fuente de recursos estaticos
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

// process_get?first_name=Juan&last_name=Zamora
app.get('/process_get', function (req, res) {

   // se define el JSON del response
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };

   console.log(req.query.first_name + ' ' + req.query.last_name)

   console.log(response);
   // se envia el JSON de vuelta al cliente como string
   //res.end("Hola "+ req.query.first_name + " " + req.query.last_name );
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
  console.log("Aplicacion activa en pueto 8081");
});
