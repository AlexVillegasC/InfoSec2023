
//imprima en consola
//emeit emite on escucha
var events = require('events');
var eventEmitter =new events.EventEmitter();

//evento conexion
var connectHandler = function conected(){
    console.log('Conexion Iniciada');
    eventEmitter.emit('connection_executed');

}

// se registra el evento connection y se le asigna uun handler
eventEmitter.on('connection',connectHandler);
eventEmitter.on('connection_executed',function(){
    console.log('se ha conenctado exitosamente');
})
eventEmitter.emit('connection');