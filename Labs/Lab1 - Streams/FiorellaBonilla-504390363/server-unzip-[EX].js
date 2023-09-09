// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

//Se utiliza el unzipper ya que es una librería sumamente fácil de utilizar para descomprimir archivos
//Fiorella Bonilla
const fs = require("fs");
const unzipper = require("unzipper");

const zipFilePath = "C:/Users/FIO/OneDrive/Documentos/InfoSe2023/InfoSec2023/Labs/Lab1/FiorellaBonilla-504390363/UNA.zip"; // Ruta al archivo ZIP
const targetFolder = "C:/Users/FIO/OneDrive/Documentos/InfoSe2023/InfoSec2023/Labs/Lab1/FiorellaBonilla-504390363/mis-archivos"; // Carpeta donde se descomprimirán los archivos

// Crea la carpeta de destino si no existe
if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder);
}

// Descomprimir el archivo ZIP
fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: targetFolder }))
  .on("finish", () => {
    console.log("Descompresión completada");
  })
  .on("error", (error) => {
    console.error("Error durante la descompresión:", error);
  });
