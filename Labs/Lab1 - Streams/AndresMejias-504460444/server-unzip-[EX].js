// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
/* 
--------------------------------------------------------------------------
    https://www.npmjs.com/package/extract-zip

    Installation
    Get the library:
        npm install extract-zip --save

    Install the command line program:
        npm install extract-zip -g
-------------------------------------------------------------------------- 
*/

// Haga unzip de "UNA.zip"
const path = 'd:/dev/GitHub/InfoSec2023/InfoSec2023/Labs/Lab1/AndresMejias - 504460444';
const extract = require('extract-zip');

async function main() {
    const source = `${path}/UNA.zip`;
    const target = `${path}/docs`;

    try {
        await extract(source, { dir: target })
        console.log('Extraction complete')
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

main();