/*  Escuchar On, el primero escucha se con on,
    pero cuando quiero escuchar 2 veces el mismo evento uso AddListener */

    var events = require('events');
    var eventEmitter = new events.EventEmitter();
    
    // evento de conexion
    var eventA = function eventA() {
        console.log('Evento A ejecutado');
    }
    
    var eventB = function eventB() {
        console.log('Evento B ejecutado');
    }
    
    // Se establecen los bindings
    eventEmitter.on('connection', eventB);
    eventEmitter.addListener('connection', eventA);
    
    //cuenta la cantidad de eventos anidados para connection
    var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
    console.log(eventListeners + 'eventos disponibles para conección...');
    
    // Ejecutamos el evento connection
    eventEmitter.emit('connection');
    
    // Vamos a remover el eventA
    eventEmitter.removeListener('connection', eventA);
    console.log('Event A fue removido');
    
    // Ejecutamos el evento connection nuevamente
    eventEmitter.emit('connection');
    
    //cuenta la cantidad de eventos anidados para connection
    var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
    console.log(eventListeners + ' eventos disponibles para conección...');