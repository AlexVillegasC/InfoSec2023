// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

// Rutas de los archivos que deseas comprimir
const archivo1 = path.join('Labs/Lab1/JorgeVillalobos-504310082/mis-archivos', 'a-wing.txt');
const archivo2 = path.join('Labs/Lab1/JorgeVillalobos-504310082/mis-archivos', 'j-type-327.txt');

// Nombre del archivo ZIP de destino
const archivoZIP = path.join('Labs/Lab1/JorgeVillalobos-504310082/mis-archivos', 'UNA.zip');

// Crea una instancia de Archiver
const output = fs.createWriteStream(archivoZIP);
const archive = archiver('zip', {
  zlib: { level: 9 } // Nivel de compresión máximo
});

// Manejadores de eventos para finalizar y error
output.on('close', () => {
  console.log(`Jorge comprimio ${archive.pointer()} bytes.`);
});

archive.on('error', (err) => {
  throw err;
});
