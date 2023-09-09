var fs = requere("fs");
var readerStream =fs.createReadStreams ('${_dirname}../../mis-archivos/a-wing.txt');

var writeStream= fs.createWriteStreams ('${_dirname}../../mis-archivos/j-type-327.txt');

readerStream.piper(writeStream);

console.log("Program Ended");