// scripts de pruebas

//libreria unalib
var val = require('unalib');
var assert = require('assert');

// pruebas:

//estamos probando un modulo llamado 'unalib'
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver true para 8297-8547', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('8297-8547'), false);
        });
    });
});