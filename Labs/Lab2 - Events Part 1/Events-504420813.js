//imprima en consola..
//EMIT emite, ON Escucha
var events = require('events');
var eventlEmitter = new events.EventEmitter();
//Evento de conexion
var connectHandler = function connected(){
    console.log('Conexion Iniciada');
    eventlEmitter.emit('connection_executed');
}
//se registra el evento conecciont y se asigna el handler
eventlEmitter.on('connection',connectHandler);

eventlEmitter.on('connection_executed',function(){
    console.log('se ha conectado exitosamente');
});

eventlEmitter.emit('connection');
