// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const archivo1 = path.join('C:/Users/Estudiantes UNA.N00165727.000/OneDrive/Documentos/Seguridad Informática/InfoSec2023/Labs/Lab1/EthanMadrigal-118250098/mis-archivos', 'a-wing.txt');
const archivo2 = path.join('C:/Users/Estudiantes UNA.N00165727.000/OneDrive/Documentos/Seguridad Informática/InfoSec2023/Labs/Lab1/EthanMadrigal-118250098/mis-archivos', 'j-type-327.txt');

const archivoZIP = path.join('C:/Users/Estudiantes UNA.N00165727.000/OneDrive/Documentos/Seguridad Informática/InfoSec2023/Labs/Lab1/EthanMadrigal-118250098/mis-archivos', 'UNA.zip');

const output = fs.createWriteStream(archivoZIP);
const archive = archiver('zip', {
  zlib: { level: 9 } 
});

output.on('close', () => {
  console.log(`Se comprimieron ${archive.pointer()} bytes en total.`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.file(archivo1, { name: 'a-wing.txt' }); 
archive.file(archivo2, { name: 'j-type-327.txt' });

archive.finalize();

