var fs = require("fs")

var readerStream = fs.createReadStream(`${_dirname}../../mis-archivos/a-win..g.txt`);

var writerStream = fs.createWriteStream(`${_dirname}../../mis-archivos/j-type-327.txt`);

// Se lee el input.txt y se agrega la data a output.txt
readerStream.pipe(writerStream);

// Salvar el pipe TODO.
// Ejercicio: trate de salvar el texto en un nuevo archivo

// fin de codigo
console.log("Program Ended")