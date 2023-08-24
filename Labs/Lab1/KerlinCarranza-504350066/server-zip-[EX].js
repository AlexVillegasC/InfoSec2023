// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('C:/Users/kerly/InfoSec2023/Labs/Lab1/KerlinCarranza-504350066/mis-archivos/UNA.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Nivel de compresión máximo
});

output.on('close', () => {
  console.log('Archivo ZIP creado:', archive.pointer(), 'bytes');
});

archive.pipe(output);

// Agregar archivos al archivo ZIP
// Agregar un archivo de texto real al archivo ZIP
const filePath1 = 'C:/Users/kerly/InfoSec2023/Labs/Lab1/KerlinCarranza-504350066/mis-archivos/a-wing.txt';
archive.append(fs.createReadStream(filePath1), { name: 'a-wing.txt' });

// Agregar otro archivo de texto real al archivo ZIP
const filePath2 = 'C:/Users/kerly/InfoSec2023/Labs/Lab1/KerlinCarranza-504350066/mis-archivos/j-type-327.txt';
archive.append(fs.createReadStream(filePath2), { name: 'j-type-327.txt' });

// Finalizar y cerrar el archivo ZIP
archive.finalize();