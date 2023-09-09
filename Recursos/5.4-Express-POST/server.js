// libreria de express JS
var express = require('express');
var bodyParser = require('body-parser');

// variable que controla Express
var app = express();

// declara el folder public como fuente de recursos estaticos
app.use(express.static('public'));

// Se define application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };

   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

});
