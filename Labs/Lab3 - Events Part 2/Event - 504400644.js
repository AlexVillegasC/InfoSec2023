var event = require('events');
var eventEmitter = new events.eventEmitter();


var eventA = function eventA(){
    console.log('Event A ejecutado');
}


var event = function eventB(){
    console.log('Event B ejecutado');
}


eventEmitter.on('connection', eventB);
eventEmitter.addListener('connection', eventA);


var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connections');
console.log(eventListeners + "eventos disponibles para coneccion...")

eventEmitter.emit('connection');


eventEmitter.removeListener('connection', eventA);
console.log('Event A fue removido');


eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "evento disponibles para conección....");












