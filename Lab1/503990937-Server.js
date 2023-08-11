// Arrays
// Crear un array con elementos de diferentes tipos de datos
const arrayEjemplo = [1, 'hola', true, [4, 5, 6]];

// Acceder a un elemento en particular del array
console.log(arrayEjemplo[1]); // salida: 'hola'

// Añadir un elemento al final del array
arrayEjemplo.push(7);
console.log(arrayEjemplo); // salida: [1, 'hola', true, [4, 5, 6], 7]

// Eliminar el último elemento del array
arrayEjemplo.pop();
console.log(arrayEjemplo); // salida: [1, 'hola', true, [4, 5, 6]]

















// Objects
// // Crear un objeto que representa un usuario
// const usuario = {
//     nombre: 'Juan',
//     apellido: 'Pérez',
//     edad: 30,
//     direccion: {
//       calle: 'Av. 123',
//       ciudad: 'Buenos Aires',
//       pais: 'Argentina'
//     }
//   };
  
//   // Acceder a una propiedad del objeto
//   console.log(usuario.nombre); // salida: 'Juan'
  
//   // Añadir una nueva propiedad al objeto
//   usuario.telefono = '1234567890';
//   console.log(usuario); // salida: { nombre: 'Juan', apellido: 'Pérez', edad: 30, direccion: { calle: 'Av. 123', ciudad: 'Buenos Aires', pais: 'Argentina' }, telefono: '1234567890' }
  
// // Crear un set con valores únicos
// const setEjemplo = new Set([1, 2, 3, 3, 4, 5, 5, 6]);

// // Acceder a los valores del set
// console.log(setEjemplo); // salida: Set(6) { 1, 2, 3, 4, 5, 6 }

// // Añadir un nuevo valor al set
// setEjemplo.add(7);
// console.log(setEjemplo); // salida: Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// Hash Tables
// // Crear un map con claves y valores de diferentes tipos
// const mapEjemplo = new Map([
//     ['nombre', 'Juan'],
//     ['edad', 30],
//     [{id: 1}, 'valor']
//   ]);
  
//   // Acceder a los valores del map
//   console.log(mapEjemplo.get('nombre')); // salida: 'Juan'
//   console.log(mapEjemplo.get({id: 1})); // salida: 'valor'
  
//   // Añadir una nueva clave-valor al map
//   mapEjemplo.set('telefono', '1234567890');
//   console.log(mapEjemplo); // salida: Map(4) { 'nombre' => 'Juan', 'edad' => 30, { id: 1 } => 'valor', 'telefono' => '1234567890' }


// // Queue
// // Creamos una cola vacía
// const colaMensajes = [];

// // Agregamos algunos mensajes a la cola
// colaMensajes.push('mensaje1');
// colaMensajes.push('mensaje2');
// colaMensajes.push('mensaje3');

// // Procesamos los mensajes en el orden en que llegaron
// while (colaMensajes.length > 0) {
//   const mensaje = colaMensajes.shift();
//   console.log('Procesando mensaje:', mensaje);
//   // aquí iría el código para procesar el mensaje
// }

// console.log('No hay más mensajes en la cola');
