//PIPING
var fs = require("fs");
var path = require("path");

var newFilePath = path.join(`${__dirname}../../mis-archivos/nuevo-archivo.txt`);
var readerStream = fs.createReadStream(`${__dirname}../../mis-archivos/a-wing.txt`);
var writerStream = fs.createWriteStream(`${__dirname}../../mis-archivos/j-type-327.txt`);
var newWriterStream = fs.createWriteStream(newFilePath);


//Se lee input.txt y se agrega la data a output.txt
readerStream.pipe(writerStream);

//Salvar el pipe TODO
//Ejercicio: Trate de salvar el texto en un nuevo archivo
readerStream.pipe(newWriterStream);

//FIN DEL CÓDIGO
console.log("Program Ended");
