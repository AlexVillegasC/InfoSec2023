// imprima en consola...
///EMIT emite, ON escucha
var events = requiere('events');
var eventEmitter = new events.eventEmitter();

//evento de conexion
var connectHandler = function connected(){
    console.log('Conexion iniciada');
    eventEmitter.emit('connection_executed');
}

// se resgistra el evento 'connection' y se asigna el handler.
eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed', function (){
    console.log('Se ha conectado exitosamene');
});

eventEmitter.emit('connection')