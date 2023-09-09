// Vaya a npm y busque una libreria que sirva para descomprimir archivos .zip
// Haga unzip de "UNA.zip"
var fs = require('fs');
var unzipper = require('unzipper');

const zipFilePath = `${__dirname}/UNA.zip`;
const destinationPath = __dirname;

// Create a readable stream from the zip file
const readStream = fs.createReadStream(zipFilePath);

// Create a writable stream to extract the files
const writeStream = unzipper.Extract({ path: destinationPath });

// Pipe the readable stream to the writable stream to extract the files
readStream.pipe(writeStream);

// Log a message to the console when the extraction is complete
writeStream.on('close', () => {
    console.log('Files extracted successfully!');
});



// Same on a single line.
// fs.createReadStream(__dirname + '/UNA.zip')
// .pipe(unzipper.Extract({ path: __dirname }));