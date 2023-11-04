// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos
const AdmZip = require('adm-zip');

// Rutas de los archivos que deseas comprimir
const file1Path = 'a-wing.txt';
const file2Path = 'j-type-327.txt';

// Crea una instancia de AdmZip
const zip = new AdmZip();

// Agrega los archivos al archivo ZIP
zip.addLocalFile(file1Path);
zip.addLocalFile(file2Path);

// Ruta donde deseas guardar el archivo ZIP resultante
const zipFilePath = 'UNA.zip';

// Guarda el archivo ZIP en la ruta especificada
zip.writeZip(zipFilePath);

console.log('Archivos comprimidos exitosamente.');
