// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip

// Haga unzip de "UNA.zip"
const AdmZip = require('adm-zip');

// Ruta al archivo ZIP que deseas descomprimir
const zipFilePath = 'C:/Users/Estudiantes UNA/InfoSec2023/Labs/Lab1/JosephAlvaradoCruz-504400556/UNA.zip';

// Ruta al directorio donde deseas descomprimir los archivos
const outputDir = 'C:/Users/Estudiantes UNA/InfoSec2023/Labs/Lab1/JosephAlvaradoCruz-504400556';

// Crear una instancia de AdmZip con el archivo ZIP
const zip = new AdmZip(zipFilePath);

// Extraer todos los archivos del ZIP en el directorio especificado
zip.extractAllTo(outputDir, true); // El segundo parámetro indica si deseas sobrescribir archivos existentes

console.log('Archivos descomprimidos exitosamente.');
