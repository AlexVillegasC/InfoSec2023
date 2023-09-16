// PIPING
var fs = require("fs");

// Create a readble stream
var readerStream = fs.createReadStream(`${__dirname}../../mis-archivos/a-wing.txt`);

// Create a writable stream
var writerStream = fs.createWriteStream(`${__dirname}/../mis-archivos/j-type-327.txt`);

// Se lee input.txt y se agrega la data a output.txt
readerStream.pipe(writerStream);

// Salvar el pipe TODO.
// Ejercicio: trate de salvar el texto en un nuevo archivo

// Fin del codigo
console.log("Program Ended");