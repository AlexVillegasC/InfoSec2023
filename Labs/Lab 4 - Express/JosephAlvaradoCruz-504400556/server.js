// npm install para descargar los paquetes...
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// Ruta para presentar el HTML
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Ruta para servir archivos estáticos (imágenes y videos)
app.use('/media', express.static(__dirname + '/media'));

// Escuchar una conexión por socket
io.on('connection', function(socket){
  // Si se escucha "chat message"
  socket.on('Evento-Mensaje-Server', function(msg){
    // volvemos a emitir el mismo mensaje
    io.emit('Evento-Mensaje-Server', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
