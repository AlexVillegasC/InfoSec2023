var events = require('events');
var eventEmitter = new events.EventEmitter();


var eventA = function eventA(){
    console.log('Event A ejecutado');
}

var eventB = function eventB(){
    console.log(eventB);
}

eventEmitter.on('conection', eventB);
eventEmitter.addListener('connection', eventA);


var evenListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListener + "eventos disponibles para coneccion...");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', eventA);
console.log('Event A fue removido');

eventEmitter.emit('connection');

var evenListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(evenListeners + "evento disponible para coneccion...")