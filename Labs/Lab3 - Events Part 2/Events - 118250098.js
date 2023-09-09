//Escuchar con On, el primer escucha se hace con on,
//pero cuando quiero escuchar 2 veces el mismo evento uso Add listener.
var events = require('events');
var eventEmitter = new events.EventEmitter();

//evento de conexión
var eventA = function eventA(){
    console.log('Event A ejecutado');
}

var eventB = function eventB(){
    console.log('Event B ejecutado');
}

//Se establecen los blindings
eventEmitter.on('connection',eventB);
eventEmitter.addListener('connection',eventA);

//Cuneta la cantidad de eventos anidados para connection
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " eventos disponibles para conección...");

//Ejecutamos el evento conection
eventEmitter.emit('connection');

//vamos a remover el EventA
eventEmitter.removeListener('connection',eventA);
console.log('Event A fue removido');

//Ejecutamos el evento connection nuevamente
eventEmitter.emit('connection');

//Cuenta la cantidad de eventos anidados para connection
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " eventos disponibles para corección...");

