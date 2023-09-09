var fs = require("fs");

var readerStream = fs.createReadStream(`${__dirname}../../mis-archivos/a-wing.txt`);
var writeStream = fs.createWriteStream(`${__dirname}../../mis-archivos/j-type-327.txt`);

readerStream.pipe(writeStream);

console.log("Program Ended");