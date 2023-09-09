var fs = require("fs")

var readerStream = fs.createReadStream(`${__dirname}../../mis-archivos/a-wing.txt`)

var writeStream = fs.createWriteStream(`${__dirname}../../mis-archivos/j-type-327.txt`)

// Se lee el input .txty se agrega la dara al  output .txt
readerStream.pipe(writeStream)

// salvar el pipe todo
// Ejercicio trate de saltar el texto en un nuevo archivo

// Fin del código
console.log("Programm Ended")