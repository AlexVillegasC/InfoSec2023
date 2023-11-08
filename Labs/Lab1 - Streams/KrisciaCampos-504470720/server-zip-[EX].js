// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos


var AdmZip = require("adm-zip");

// Crear una nueva instancia de AdmZip
var zip = new AdmZip();

// Agregar el contenido de los archivos a la instancia de zip
var content1 = "Contenido del archivo 0";
zip.addFile("a-wing.txt", Buffer.from(content1, "utf8"));

var content2 = "Contenido del archivo 1";
zip.addFile("j-type-327.txt", Buffer.from(content2, "utf8"));

// Escribir el archivo ZIP en disco
zip.writeZip("UNA-new.zip");

console.log('Compresión completada');
