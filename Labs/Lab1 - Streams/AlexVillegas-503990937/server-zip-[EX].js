// Ejercicio:
// Vaya a npm y busque una libreria que sirva para comprimir archivos .zip
// Comprima todos los archivos .txt que estan en la carpeta mis-archivos, genera un "UNA.zip" dentro del folder mis-archivos
var fs = require('fs');
var archiver = require('archiver');

// Crea un 'Writable Stream' (Un flujo de datos en el que se puede escribir).
var output = fs.createWriteStream(__dirname + '/UNA.zip');

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
    
    if(fileName.includes(".txt")){
      let file1 = dir + '\\' + fileName;
      archive.append(fs.createReadStream(file1), { name: fileName });
    }    
  });

  // Listo!
  archive.finalize();
} 