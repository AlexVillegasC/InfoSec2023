// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"
const AdmZip = require("adm-zip");
const path = require("path");

const zipFilePath = path.join(__dirname, "UNA.zip");
const targetFolder = path.join(__dirname, "mis-archivos"); 

const zip = new AdmZip(zipFilePath);
zip.extractAllTo(targetFolder, true);

console.log('Extraction complete');
