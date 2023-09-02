// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

const AdmZip = require('adm-zip');
const path = require('path');

// Ruta al archivo ZIP de muestra y directorio de destino
const source = path.join('C:/Users/Maria del Mar Acon/Desktop/InfoSec/InfoSec2023/Labs/Lab1/MariaAcon-305420521', 'UNA.zip');
const target = path.join('C:/Users/Maria del Mar Acon/Desktop/InfoSec/InfoSec2023/Labs/Lab1/MariaAcon-305420521', 'directorio_de_destino');

function descomprimirZIP() {
  try {
    const zip = new AdmZip(source); // Crea una instancia del archivo ZIP
    zip.extractAllTo(target, /* overwrite */ true); // Extrae el contenido del archivo ZIP al directorio de destino
    console.log('El archivo UNA.zip se descomprimió de manera exitosa');
  } catch (err) {
    console.error('El archivo UNA.zip no se pudo descomprimir:', err);
  }
}

descomprimirZIP();