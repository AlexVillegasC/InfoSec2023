const AdmZip = require('adm-zip');
const path = require('path');

// Ruta al archivo ZIP de muestra y directorio de destino
const source = path.join('Labs/Lab1/JorgeVillalobos-504310082', 'UNA.zip');
const target = path.join('Labs/Lab1/JorgeVillalobos-504310082/mis-archivos', 'Labs/Lab1/JorgeVillalobos-504310082');

function descomprimirZIPJorge() {
  try {
    const zip = new AdmZip(source); // Crea una instancia del archivo ZIP
    zip.extractAllTo(target, /* overwrite */ true); // Extrae el contenido del archivo ZIP al directorio de destino
    console.log('Se descomprimió el archivo ZIP de Jorge!');
  } catch (err) {
    console.error('Error al descomprimir el archivo', err);
  }
}

descomprimirZIPJorge();