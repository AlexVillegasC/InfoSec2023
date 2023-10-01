// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const sourceZipPath = './mis-archivos/UNA.zip';
const targetFolderPath = './mis-archivos/unzipped';

const zip = new AdmZip(sourceZipPath);

// Crea el directorio de destino si no existe
if (!fs.existsSync(targetFolderPath)) {
  fs.mkdirSync(targetFolderPath);
}

zip.extractAllTo(targetFolderPath, true);

console.log('Archivo ZIP descomprimido exitosamente.');
