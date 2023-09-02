// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

const AdmZip = require('adm-zip');
const path = require('path');

const source = path.join('C:/Users/Estudiantes UNA.N00165727.000/OneDrive/Documentos/Seguridad Informática/InfoSec2023/Labs/Lab1/EthanMadrigal-118250098', 'UNA.zip');
const target = path.join('C:/Users/Estudiantes UNA.N00165727.000/OneDrive/Documentos/Seguridad Informática/InfoSec2023/Labs/Lab1', 'EthanMadrigal-118250098');

function descomprimirZIP() {
  try {
    const zip = new AdmZip(source); 
    zip.extractAllTo(target,  true); 
    console.log('Se descomprimió el archivo ZIP de UNA.zip exitosamente!');
  } catch (err) {
    console.error('Error al descomprimir el archivo ZIP:', err);
  }
}

descomprimirZIP();
