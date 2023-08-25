// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"
const AdmZip = require('adm-zip');

// Ruta al archivo ZIP que deseas descomprimir
const zipFilePath = 'UNA.zip';

// Directorio donde deseas extraer los archivos
const extractToPath = 'Unzip.js';

// Crea una instancia de AdmZip con el archivo ZIP
const zip = new AdmZip(zipFilePath);

// Extrae todo el contenido del archivo ZIP en el directorio especificado
zip.extractAllTo(extractToPath, true);

console.log('Archivo ZIP descomprimido exitosamente.');
