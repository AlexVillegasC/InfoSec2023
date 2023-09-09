//npm install express

// libreria de express JS
var express = require('express');

// variable que controla Express
var app = express();

// declara el folder public como fuente de recursos estaticos
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hola Mundo');
})

var server = app.listen(8081, function () {
  // inicie el servidor...
});

// TODO: Pruebe la siguiente imagen
// http://localhost:8081/images/logo.png
