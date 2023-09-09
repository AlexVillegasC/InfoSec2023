//Imprimir una consola
//EMIT emite,ON escucha

const { Console } = require('console');
var events =  require('events');
var evenEMitter = new events.EventEmitter();

//evento de coneion
var connectHandler = function connected(){
    console.log('Conexion iniciada');
    evenEMitter.emit('connection_executed');
}

//se registra el evento connection y se asigna el handler
evenEMitter.on('connection', connectHandler);

evenEMitter.on('connection_executed', function(){
    console.log('Se ha conectado exitosamente');
});

evenEMitter.emit('connection');