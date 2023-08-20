const fs = require('fs');
const archiver = require('archiver');
var output = fs.createWriteStream('./'+'Lab-Comprimir'+'.zip');
var archive = archiver('zip')
archive.pipe(output);

archive.directory('./mis-archivos',"mis-archivos");

archive.finalize();