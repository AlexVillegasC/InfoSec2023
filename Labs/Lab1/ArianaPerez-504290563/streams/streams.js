var fs = require("fs");

var readerStream = fs.createReadStream(`${__dirname}../../mis-archivos/a-wing.txt`);
// Create a writeable stream
var writerStream = fs.createWriteStream(`${__dirname}../../mis-archivos/j-type-327.txt`);

readerStream.pipe(writerStream);

console.log("Program Ended"); 