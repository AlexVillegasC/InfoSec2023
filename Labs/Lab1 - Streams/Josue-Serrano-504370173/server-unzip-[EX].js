// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"

//We need to install-> npm install zip-lib

const zl = require("zip-lib");
            //Ruta archivo comprimido                     Ruta archivo destino
zl.extract("Labs/Lab1/Josue-Serrano-504370173/UNA.zip", "Labs/Lab1/Josue-Serrano-504370173/UNA").then(function () {
    console.log("done");
}, function (err) {
    console.log(err);
}); 