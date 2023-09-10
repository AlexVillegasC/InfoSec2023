// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const fs = require('fs');
const archiver = require('archiver');
var output = fs.createWriteStream('mis-archivos/'+'UNA'+'.zip');//define ruta y nombre para el o los archvios a comprimir
var archive = archiver('zip')//establece el tipo de archivo
archive.pipe(output);

//archive.directory('./mis-archivos',"mis-archivos");//comprime por ruta, Error al comprimir archvios de una carpeta y guardar el zip creado en esa misma carpeta
archive.append(fs.createReadStream('./mis-archivos/j-type-327.txt'),{name:'j-type-327.txt'})//comprime por archivos solamente el archivo seleccionado, ruta, nombre post compresion
archive.append(fs.createReadStream('./mis-archivos/a-wing.txt'),{name:'a-wing.txt'})
archive.finalize();