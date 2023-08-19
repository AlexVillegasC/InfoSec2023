// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const AdmZip = require("adm-zip");

// Crear una instancia de AdmZip
const zip = new AdmZip();

// Agregar contenido de dos archivos a la instancia de AdmZip
const content1 = "Contenido del archivo 1";
const content2 = "Contenido del archivo 2";

zip.addFile("a-wing.txt", Buffer.from(content1, "utf8"));
zip.addFile("j-type-327.txt", Buffer.from(content2, "utf8"));

// Guardar el contenido en un archivo ZIP
zip.writeZip("NewUNA.zip");

console.log("Compresión completada");
