const AdmZip = require('adm-zip');
const fs = require('fs');

const zipFilePath = 'UNA.zip';
const outputFolder = 'C:/Users/marco/Desktop/seguridad_informartia/InfoSec2023/Labs/marco-cortes-504420108/lab_1';

// Crear una instancia de AdmZip con el archivo ZIP
const zip = new AdmZip(zipFilePath);

// Extraer el contenido del archivo ZIP
zip.extractAllTo(outputFolder, true);

console.log('Archivo ZIP "UNA.zip" descomprimido exitosamente.');