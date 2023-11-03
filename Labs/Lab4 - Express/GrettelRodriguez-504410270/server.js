// npm install para descargar los paquetes...

// Librerías
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// Ruta para presentar el archivo HTML
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/public'));

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
  });
});

http.listen(port, function(){
  console.log('Escuchando en *:' + port);
});
