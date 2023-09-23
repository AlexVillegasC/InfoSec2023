// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
//------------Utilice la libreria Adm-zip--------------
// Haga unzip de "UNA.zip"
const AdmZip = require('adm-zip');

// Ruta al archivo ZIP que deseas descomprimir
const zipFilePath = 'C:/WAMP/www/InfoSec2023/Labs/Lab1-GrettelRodriguez-504410270/UNA.zip';

// Ruta al directorio donde deseas descomprimir los archivos
const outputDir = 'C:/WAMP/www/InfoSec2023/Labs/Lab1-GrettelRodriguez-504410270';

const zip = new AdmZip(zipFilePath);

zip.extractAllTo(outputDir, true); 

console.log('Archivos descomprimido');