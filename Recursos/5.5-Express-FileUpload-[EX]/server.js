// librerias
var express = require('express');

// variable que controla Express
var app = express();

//File upload 
const fileUpload = require('express-fileupload');
// default options
app.use(fileUpload());


// GET
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

// POST
app.post('/file_upload',  function (req, res) {

  // Investigue como hacer un file upload por post
  // busque en NPM
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.archivo;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname+'\\'+req.files.archivo.name, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });

});


// Inicia el server...
var server = app.listen(8081, function () {
  console.log("Aplicacion activa en 8081");

});
