// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "cenfo.zip"

var fs = require('fs');
var unzip = require('unzip');

fs.createReadStream(__dirname+"\\cenfo.zip")
.pipe(unzip.Extract({ path: __dirname }));
