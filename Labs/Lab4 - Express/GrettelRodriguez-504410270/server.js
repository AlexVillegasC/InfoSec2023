<<<<<<< HEAD
=======
// npm install para descargar los paquetes...

// Librerías
>>>>>>> origin/main
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

<<<<<<< HEAD
=======
// Ruta para presentar el archivo HTML
>>>>>>> origin/main
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/public'));

<<<<<<< HEAD
io.on('connection', function(socket){
  socket.on('Evento-Mensaje-Server', function(msg){
    var msgJson = JSON.parse(msg);

    // Si se incluye una URL de imagen, la enviamos como un evento separado
    if (msgJson.imageURL) {
      io.emit('Evento-Imagen-Server', msgJson.imageURL);
    }

    // Si se incluye una URL de video, la enviamos como un evento separado
    if (msgJson.videoURL) {
      io.emit('Evento-Video-Server', msgJson.videoURL);
    }

    // Emitimos el mensaje de texto
    io.emit('Evento-Mensaje-Server', msg);
=======
// Escuchar una conexión por socket
io.on('connection', function(socket){
  // Si se escucha "Evento-Mensaje-Server"
  socket.on('Evento-Mensaje-Server', function(msg){
    // Parseamos el mensaje JSON
    var msgJson = JSON.parse(msg);

    // Verificamos si el mensaje es una URL de imagen
    if (msgJson.mensaje.trim().startsWith('http://') || msgJson.mensaje.trim().startsWith('https://')) {
      // Si es una URL de imagen, emitimos un evento 'Evento-Imagen-Server' para mostrar la imagen
      io.emit('Evento-Imagen-Server', msgJson);
    } else {
      // Si no es una URL de imagen, emitimos el mismo mensaje de texto
      io.emit('Evento-Mensaje-Server', msg);
    }
>>>>>>> origin/main
  });
});

http.listen(port, function(){
  console.log('Escuchando en *:' + port);
});
