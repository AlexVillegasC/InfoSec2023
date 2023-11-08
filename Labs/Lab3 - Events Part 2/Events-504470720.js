var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventA = function eventA(){
    console.log('Event A fue ejecutado');
}

var eventB = function eventB(){
    console.log('Event B fue ejecutado');
}

eventEmitter.on('connection',eventB);
eventEmitter.addListener('connection',eventA);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Eventos disponibles para conección...");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',eventA);
console.log('Event A fue removido');

eventEmitter.emit('connection');
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Eventos disponibles para conección...");
