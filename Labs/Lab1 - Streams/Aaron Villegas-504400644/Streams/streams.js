
//piping
var fs = require("fs");

//create a readable stream
var readerStream = fs.createReadStream(`${__dirname}../../mis-archivos/a-wing.txt`);



//create a writable stream
var writerStream = fs.createWriteStream(`${__dirname}../../mis-archivos/j-type-327.txt`);


// se lee input.txt y se agrega la data a output.txt

readerStream.pipe(writerStream);

//salvar el pipe todo.
//ejercicio: trata de salvar el texto en un nuevo archivo

//fin de codigo
console.log("Program Ended");