// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos

const AdmZip = require('adm-zip');

const fs = require('fs');

const zip = new AdmZip();

zip.addLocalFile("C:/Users/brale/OneDrive/Documentos/Universidad/II_Ciclo_2023/seguridad-informatica/InfoSec2023/Labs/Lab1/BreinerBarrantes-504370580/mis-archivos/a-wing.txt");
zip.addLocalFile("C:/Users/brale/OneDrive/Documentos/Universidad/II_Ciclo_2023/seguridad-informatica/InfoSec2023/Labs/Lab1/BreinerBarrantes-504370580/mis-archivos/j-type-327.txt");

const outputPath = "C:/Users/brale/OneDrive/Documentos/Universidad/II_Ciclo_2023/seguridad-informatica/InfoSec2023/Labs/Lab1/BreinerBarrantes-504370580/mis-archivos/UNA.zip";

zip.writeZip(outputPath);

console.log('Archivos comprimidos exitosamente en:',outputPath);

