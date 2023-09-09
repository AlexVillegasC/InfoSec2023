//npm install express

// libreria de express JS
var express = require('express');

// variable que controla Express
var app = express();

app.get('/', function (req, res) {
   res.send('Mi Primera Aplicacion con NodeJS y ExpressJS! (get)');
});

app.get('/usuarios', function (req, res) {
   console.log("Obtiene la lista de usuarios");
   res.send('Lista de Usuarios... (get)');
});

app.post('/usuarios', function (req, res) {
  console.log("Obtiene la lista de usuarios");
  res.send('Lista de Usuarios... (POST)');
})

var server = app.listen(8081, function () {
  // Inicie El Server en e puerto 8081
  console.log('Express app en el puerto 8081');

})
 