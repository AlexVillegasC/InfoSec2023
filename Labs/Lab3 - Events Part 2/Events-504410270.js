var events = require('events');
var eventEmitter = new events.EventEmitter();

// evento de conexion 
var eventA = function eventA(){
    console.log ('Event A ejecutado');
}

var eventB = function eventB(){
    console.log ('Event B ejecutado');
}

//se establecen los bindings
eventEmitter.on('connection',eventB)
eventEmitter.addListener('connection',eventA);

//cuenta la cantiad de eventos anidados por connection
var eventListeners =require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "eventos disponibles para coneccion...");

//ejecutamos el evento connection
eventEmitter.emit('connection');
// removemos el eveto A

eventEmitter.removeListener('connection',eventA);
console.log('Event A fue removido');

//ejecutamos el evengto conection nuevamente
eventEmitter.emit('connection');

//cuenta la cantidad de eventos anidados 
var eventListeners =require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "evento disponible para la coneccion..");