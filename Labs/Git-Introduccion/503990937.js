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
// Crear un objeto que representa un usuario
const usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    direccion: {
      calle: 'Av. 123',
      ciudad: 'Buenos Aires',
      pais: 'Argentina'
    }
  };
  
  // Acceder a una propiedad del objeto
  console.log(usuario.nombre); // salida: 'Juan'

// Recorrido de Array
// const libros = [
//     {id: 105, titulo: "El principito"},
//     {id: 210, titulo: "Cien años de soledad"},
//     {id: 304, titulo: "Don Quijote de la Mancha"},
//     {id: 457, titulo: "1984"},
//     {id: 501, titulo: "Un mundo feliz"}    
// ];

// libros.forEach(libro => {
//     console.log(`ID: ${libro.id}, Título: ${libro.titulo}`);
// });
