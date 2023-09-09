/// PIPING
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream(`${__dirname}../../mis-archivos/a-wing.txt`);

// Create a writable stream
var writerStream = fs.createWriteStream(`${__dirname}../../mis-archivos/j-type-327.txt`);

// Se lee input.txt y se agrega la data a output.txt
readerStream.pipe(writerStream);

// Salvar el pipe TODO.
// Ejericio: trate de salvar el texto en un nuevo archivo

// fin de codigo
console.log("Program Ended");
