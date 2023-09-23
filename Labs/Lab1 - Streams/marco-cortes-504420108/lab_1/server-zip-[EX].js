AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const filesToCompress = ['a-wing.txt', 'j-type-327.txt'];
const outputFolder = 'mis-archivos/';
const zipFileName = 'UNA.zip';

// Crear una instancia de AdmZip
const zip = new AdmZip();

// Agregar los archivos al archivo ZIP
for (const file of filesToCompress) {
  const filePath = path.join(outputFolder, file);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath);
    zip.addFile(file, fileContent);
  } else {
    console.log(`El archivo ${file} no existe en la carpeta.`);
  }
}

// Guardar el archivo ZIP
const zipFilePath = path.join(outputFolder, zipFileName);
zip.writeZip(zipFilePath);

console.log(`Archivos comprimidos en "${zipFileName}" en la carpeta "${outputFolder}".`);