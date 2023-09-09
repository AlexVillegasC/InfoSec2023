var val = require('unalib');
var assert = require('assert');


    // Pruebas:

    // Estamos probando un modulo llamado 'unalib'
describe('unalib' , function() {
    // Dentro de 'unalib' estamos probando una funcion especifica
    // llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function() {
        // Esta es nuestra prueba actual. Estamos verificando 
        // si 'is_valid_phone' funciona correctamente para una
        //entrada especifica
        it('deberia devolver true para 8297-8547', function() {
            //Esta es la comprobaci[on (o "afirmacion"). Si es falso,
            // la prueba fallara
            assert.equal(val.is_valid_phone('8297-8547'), true);
        });
    });
});