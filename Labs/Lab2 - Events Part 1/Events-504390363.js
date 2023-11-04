var events = required('events');
var eventEmitter = new events.eventEmitter();

var connectHandler = function connect(){
    console.log('Conexion iniciada')
    eventEmitter.emit('connection_executed');

}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('connection_executed',function(){
    console.log('Se ha conectado exitosamente');

});

eventEmitter.emit('connection');
