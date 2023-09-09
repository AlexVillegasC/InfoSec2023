// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const zl = require("zip-lib");

const zip = new zl.Zip();
// Adds a file from the file system
zip.addFile("Labs/Lab1/Josue-Serrano-504370173/mis-archivos/a-wing.txt");
zip.addFile("Labs/Lab1/Josue-Serrano-504370173/mis-archivos/j-type-327.txt");
//zip.addFolder("path/to/folder");
// Generate zip file.
zip.archive("Labs/Lab1/Josue-Serrano-504370173/mis-archivos/UNA.zip").then(function () {
    console.log("done");
}, function (err) {
    console.log(err);
});