// npm install archiver --save

var fs = require('fs');
var archiver = require('archiver');

//requiring path and fs modules

// definir el .zip
var output = fs.createWriteStream(__dirname + '/cenfo.zip');

// caracteristicas del zip
var archive = archiver('zip', {
  zlib: { level: 9 }
});

// establecer el pipe entre el output y el objeto archiver
archive.pipe(output);

// lectura del archivo a comprimir
var file1 = __dirname + '/input.txt';
archive.append(fs.createReadStream(file1), { name: 'mi-archivo.txt' });


// Listo!
archive.finalize();

// Ejercicio:
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos

compressMyFiles('mis-archivos','MisArchivos.zip')

function compressMyFiles(dir, zipFileName){
  let archive = archiver('zip', {
    zlib: { level: 9 }
  });
  dir = __dirname+'\\'+dir;
  let output = fs.createWriteStream(dir+'\\'+zipFileName);
  archive.pipe(output);
  fs.readdirSync(dir).map(fileName => {
    // lectura del archivo .txt a comprimir
    if(fileName.includes(".txt")){
      let file1 = dir + '\\' + fileName;
      archive.append(fs.createReadStream(file1), { name: fileName });
    }
  });
  // Listo!
  archive.finalize();
} 