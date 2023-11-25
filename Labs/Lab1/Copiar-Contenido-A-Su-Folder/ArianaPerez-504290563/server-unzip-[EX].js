// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

const decompress = require('decompress');
 
decompress('C:\Users\Ariana\Documents\InfoSec2023\Labs\Lab1\ArianaPerez-504290563\UNA.zip', 'C:\Users\Ariana\Documents\InfoSec2023\Labs\Lab1\ArianaPerez-504290563').then(files => {
    console.log('done!');
});

