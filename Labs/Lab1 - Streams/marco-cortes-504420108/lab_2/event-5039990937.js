var events = require('events');
var eventEmitter = new events.EventEmitter();
//evento de conexión
var connectHandler = function connected(){ 
    console.log ('Conexion iniciada');
eventEmitter. emit('connection_executed');
}

// se registr el evento 'connection' y se asigna el handler. eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed', function () { console.log('Se ha conectado exitosamente');
});
eventEmitter.emit('connection');