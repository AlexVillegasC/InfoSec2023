var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

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
    msg=validation.validateMessage(msg);
    // Emitimos el mensaje de texto
    io.emit('Evento-Mensaje-Server', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
