// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

var AdmZip = require("adm-zip");
var path = require("path");

var zip = new AdmZip();

var file1Path = path.join(__dirname, "mis-archivos", "a-wing.txt");
var file2Path = path.join(__dirname, "mis-archivos", "j-type-327.txt");

zip.addLocalFile(file1Path);
zip.addLocalFile(file2Path);

var outputPath = path.join(__dirname, "mis-archivos", "UNA.zip");

zip.writeZip(outputPath);

console.log("Compresión exitosa.");