var val = require('unalib');
var assert = require('assert');

// Estamos probando un módulo llamado 
describe('unalib', function() {
// Dentro de 'unalib', estamos probando una función especifica llamada 'is_valid_phone' 
describe('función is_valid_phone', function() {
// Esta es nuestra prueba actual. Estamos verificando si 'is_valid_phone' funciona 
it('debería devolver true para 8297-8547', function() {
// Esta es la comprobación (o "afirmación"). Si es falso, la prueba fallará.
assert.equal(val.is_valid_phone('8297-8547'), true);
   
        });
    });
});