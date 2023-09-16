var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventA = function eventA(){
    console.log('Event A ejecutado');
}

var eventB = function eventB(){
    console.log('Event B ejecutado');

}

eventEmitter.on('connection',eventB);
eventEmitter.addListener('connection',eventA);
 var eventListenners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

 console.log(eventListenners + " eventos disponibles para coneccion...");

 eventEmitter.emit('connection');

 eventEmitter.removeListener('connection', eventA);
 console.log('Evente A fue removido');

 eventEmitter.emit('connection');

 var eventListenners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
 console.log(eventListenners + " evento disponibles para coneccion...")
