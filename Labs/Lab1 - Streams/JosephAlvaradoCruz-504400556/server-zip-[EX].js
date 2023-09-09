// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, 
//genera un "UNA.zip" dentro del folder mis-archivos
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

// Ruta a la carpeta que deseas comprimir
const carpetaOrigen = 'C:/Users/Estudiantes UNA/InfoSec2023/Labs/Lab1/JosephAlvaradoCruz-504400556/mis-archivos'; // Reemplaza esto con la ruta correcta

// Ruta donde se guardará el archivo ZIP resultante
const archivoZipDestino = path.join(carpetaOrigen, 'UNA.zip');

// Crear una instancia de AdmZip
const zip = new AdmZip();

// Obtener la lista de archivos en la carpeta
const archivosEnCarpeta = fs.readdirSync(carpetaOrigen);

// Filtrar solo los archivos .txt
const archivosTxt = archivosEnCarpeta.filter(nombreArchivo => nombreArchivo.endsWith('.txt'));

// Agregar cada archivo .txt al archivo ZIP
archivosTxt.forEach(nombreArchivo => {
    const rutaCompletaArchivo = path.join(carpetaOrigen, nombreArchivo);
    const contenidoArchivo = fs.readFileSync(rutaCompletaArchivo);
    zip.addFile(nombreArchivo, contenidoArchivo);
});

// Escribir el contenido del archivo ZIP en disco
zip.writeZip(archivoZipDestino);

console.log('Archivos .txt comprimidos en un archivo ZIP exitosamente.');
