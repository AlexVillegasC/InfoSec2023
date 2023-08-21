// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

    const AdmZip = require("adm-zip");

    const  archivo = 'UNA.zip';

    const directorioDestino = 'UNAzip';

    const zip = new AdmZip(archivo);

    zip.extractAllTo(directorioDestino, true);

   