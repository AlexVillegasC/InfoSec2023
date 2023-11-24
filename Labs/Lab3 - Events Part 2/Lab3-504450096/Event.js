var events = require('events');
var eventlEmitter = new events.EventEmitter();

var eventA = function eventA(){
    console.log('event A ejecutando');
}

var eventB = function eventB(){
    console.log('event B ejecutando');
}

eventlEmitter.on ('connetion',eventB);
eventlEmitter.addListener('connetion',eventA);

var eventListeners = require('events').EventEmitter.listenerCount(eventlEmitter,'connetion');
console.log(eventListeners + "eventos disponibles para la coneccion.....");

eventlEmitter.emit('connection');

eventlEmitter.removeListener('connection', eventA);
console.log('Event A fue removido');

eventlEmitter.emit('connection');

var eventListeners = require('events').eventlEmitter.listenerCount(eventlEmitter, 'connection');
console.log(eventListeners + "Evento disponible para coneccion...");