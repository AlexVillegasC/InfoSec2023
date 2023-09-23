var fs= require("fs");

var readStream = fs.createReadStream('${_dirname}../../AdrianAguilar-504420813/mis-archivos/a-wing.txt');

var writerStream = fs.createWriteStream('${_dirname}../../AdrianAguilar-504420813/mis-archivos/j-type-327.txt');

readStream.pipe(writerStream);


console.log("Program Ended");