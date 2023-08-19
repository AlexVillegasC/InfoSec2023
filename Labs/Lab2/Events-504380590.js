var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log('Conexion iniciada');
    eventEmitter.emit('connection_executed')
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed', function(){
    console.log('Se ha conectado exitosamente');
});

eventEmitter.emit('connection');