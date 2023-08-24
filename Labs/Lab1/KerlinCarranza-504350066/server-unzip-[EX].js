// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

const decompress = require('decompress');
 
decompress('C:/Users/kerly/InfoSec2023/Labs/Lab1/KerlinCarranza-504350066/UNA.zip', 'C:/Users/kerly/InfoSec2023/Labs/Lab1/KerlinCarranza-504350066').then(files => {
    console.log('done!');
});