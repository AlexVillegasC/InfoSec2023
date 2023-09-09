// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"


var AdmZip = require("adm-zip");
var path = require("path");

// Nombre del archivo .zip
var zipFileName = "UNA.zip";

// Ruta completa al archivo .zip con __dirname
var zipFilePath = path.join(__dirname, zipFileName);

// Ruta para almacenar los archivos descomprimidos utilizando __dirname
// var extractPath = path.join(__dirname, "MoisesZuñigaP-504280564");

var zip = new AdmZip(zipFilePath);

// Extrae el contenido del archivo .zip en un directorio específico
// zip.extractAllTo(extractPath, /*overwrite*/true);

zip.extractAllTo(__dirname, /*overwrite*/true);

console.log("Descompresión exitosa.");