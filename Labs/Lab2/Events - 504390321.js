//imprima en consola
//emit emite, on escucha


var events = require('events');
var eventEmitter = new events.EventEmitter();

//evento de conexion
var connectHandler = function connected(){
    console.log('Conexion Iniciada');
    eventEmittert.emit ('connection_executed');
}

// se registra el evento connection y se asigan el handler

eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed', function(){
    console.log('se ha conectado exitosamente');
});

eventEmitter.emit('conection');