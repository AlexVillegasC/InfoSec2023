var val = require('UNAnpm')
var assert = require('assert')

decsribe('UNAnpm', function() {
    // Dentro de 'UNAnpm' estamos probando la función específica llamada is_valid_phone
    decsribe('función is_valid_phone', function() {
        // Esta es la prueba actual, se verifica si is_valid_phone funciona correctemente
        it('debería devolver true para 8297-8547', function() {
            // Esa es la comparación (o afirmación). Si es falso, la prueba fallará
            assert.equal(val.is_valid_phone('8297-8547'), true);
        })
    })
})