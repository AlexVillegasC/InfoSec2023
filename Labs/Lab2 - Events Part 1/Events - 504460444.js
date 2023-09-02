//imprima en consola...
//EMIT emite, ON escucha

var events = require('events');
var eventEmitter = new events.EventEmitter();

//evento de conexion
var connectHandler = function connected() {
    console.log('Conexion iniciada');
    eventEmitter.emit('connection_executed');
}

// se registra el evento 'connection' y se asigna el handler.
eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed', function () {
    console.log('Se ha conectado exitosamente');
})

eventEmitter.emit('connection');