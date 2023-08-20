const fs = require('fs');
const archiver = require('archiver');
var output = fs.createWriteStream('./'+'Lab-Comprimir'+'.zip');//Direccion de guardado
var archive = archiver('zip')
archive.pipe(output);

archive.directory('./mis-archivos',"mis-archivos");//Ruta y nombre de carpeta

archive.finalize();