var events = require('events');
var eventlEmitter = new events.EventEmitter();

var eventA = function eventA() {
    console.log('event A ejecutando');
}

var eventB = function eventB() {
    console.log('event B ejecutando');
}

eventlEmitter.on('connection', eventB); 
eventlEmitter.addListener('connection', eventA); 

var eventListeners = require('events').EventEmitter.listenerCount(eventlEmitter, 'connection');
console.log(eventListeners + " eventos disponibles para la conexión.....");

eventlEmitter.emit('connection');

eventlEmitter.removeListener('connection', eventA);
console.log('Event A fue removido');

eventlEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventlEmitter, 'connection'); 
console.log(eventListeners + " evento disponible para conexión...");
