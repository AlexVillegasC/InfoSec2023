// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"


//Melany


const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// Ruta al archivo ZIP que deseas descomprimir
const source = 'C:/Melany/Desktop/InfoSec2023/InfoSec2023/Labs/Lab1/MelanyLawson - 504390321';

// Ruta del directorio de destino para la descompresión
const target = 'C:/Melany/Desktop/InfoSec2023/InfoSec2023/Labs/Lab1/MelanyLawson - 504390321';

// Lee el archivo ZIP
const readStream = fs.createReadStream(source);

// Crea un stream de descompresión
const unzip = zlib.createUnzip();

// Crea un stream de escritura en el directorio de destino
const writeStream = fs.createWriteStream(target);

// Piping: redirige el flujo del archivo ZIP al descompresor y luego al directorio de destino
readStream.pipe(unzip).pipe(writeStream);

writeStream.on('close', () => {
    console.log('Archivos descomprimidos con éxito.');
});

writeStream.on('error', (err) => {
    console.error('Error al escribir los archivos descomprimidos:', err);
});
