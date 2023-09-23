var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventA = function eventA(){
    console.log('Evento A ejecutado');
}

var eventB = function eventB(){
    console.log('Evento B ejecutado');
}

eventEmitter.on('connection', eventB); 
eventEmitter.addListener('connection', eventA);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " eventos disponibles para conexión...");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', eventA);
console.log('Evento A fue removido');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " evento disponible para conexión...");
