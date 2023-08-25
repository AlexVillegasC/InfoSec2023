// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos


const filePath = 'C:/Users/Melany Lawson/Desktop/InfoSec2023/Labs/Lab1/MelanyLawson';

const fs = require('fs').promises;
const path = require('path');
const JSZip = require('jszip');

async function createZipFromFolder(folderPath, outputPath) {
    const zip = new JSZip();
    await addFolderToZip(zip, folderPath);
    const zipContent = await zip.generateAsync({ type: 'nodebuffer' });
    await fs.writeFile(outputPath, zipContent);
    console.log('Carpeta comprimida en archivo ZIP exitosamente.');
}

async function addFolderToZip(zip, folderPath, parentFolder = '') {
    const folderContents = await fs.readdir(folderPath);

    for (const item of folderContents) {
        const itemPath = path.join(folderPath, item);
        const relativePath = path.join(parentFolder, item);

        const stats = await fs.stat(itemPath);
        if (stats.isFile() && path.extname(itemPath) === '.txt') { // Solo agrega archivos .txt
            const fileContent = await fs.readFile(itemPath);
            zip.file(relativePath, fileContent);
        } else if (stats.isDirectory()) {
            await addFolderToZip(zip.folder(relativePath), itemPath, relativePath);
        }
    }
}

const sourceFolder = path.join(filePath, 'mis-archivos'); // Usa path.join para formar rutas correctamente
const outputZipPath = path.join(sourceFolder, 'UNA.zip'); // Usa path.join para formar rutas correctamente

createZipFromFolder(sourceFolder, outputZipPath);
