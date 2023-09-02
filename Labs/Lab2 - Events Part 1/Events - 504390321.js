//imprima en consola
//emit emite, on escucha

/*
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

eventEmitter.emit('connection'); // 'connection', no 'conection'
*/


var events = require('events');
var eventEmitter = new events.EventEmitter();

// Evento de conexión
var connectHandler = function connected() {
    console.log('Conexión Iniciada');
    eventEmitter.emit('connection_executed'); // Corrección en esta línea
}

// Se registra el evento 'connection' y se asigna el handler
eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed', function() {
    console.log('Se ha conectado exitosamente');
});

eventEmitter.emit('connection');
