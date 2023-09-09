var fs = require("fs");

// lectura sincronica del archivo
// Esto genera un bloqueo.

var  data2= fs.readFileSync('input2.txt');
console.log(data2.toString());

var data1 = fs.readFileSync('input1.txt');
console.log(data1.toString());

console.log("Fin de la aplicacion");















// // Lee el archivo datos.json
// fs.readFile('datos.json', 'utf-8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       // Parsea el contenido JSON del archivo
//       const contenido = JSON.parse(data);
//       console.log(contenido);
//     }
//   });
