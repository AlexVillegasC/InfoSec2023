// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

const decompress = require("decompress"); 

decompress("UNA.zip", "unzip-UNA") //Archivo a descomprimir con parametros, nombre del archivo seguido de nombre de la carpeta en donde se va a extraer
  .then((files) => {
    console.log(files);
  })
//!!clausula de error en caso de proceso fallido por diversas razones
  .catch((error) => {
    console.log(error);
  });

