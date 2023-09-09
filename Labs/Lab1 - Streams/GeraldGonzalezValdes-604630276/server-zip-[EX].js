// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const sourceFolderPath = './mis-archivos';
const targetZipPath = path.join(sourceFolderPath, 'UNA.zip');

const zip = new AdmZip();

// Lee los archivos en la carpeta sourceFolderPath y agrega los archivos .txt al archivo ZIP
fs.readdirSync(sourceFolderPath).forEach(file => {
  const filePath = path.join(sourceFolderPath, file);
  if (fs.statSync(filePath).isFile() && path.extname(filePath) === '.txt') {
    zip.addLocalFile(filePath);
  }
});

// Escribe el archivo ZIP en el directorio de destino
zip.writeZip(targetZipPath);

console.log('Archivos .txt comprimidos exitosamente.');

//comando que use para correr el codigo node server-zip-[EX].js
