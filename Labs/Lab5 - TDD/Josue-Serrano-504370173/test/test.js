var val = require("unalib");
var assert = require("assert");

//pruebas:

//estamos probando un módulo llamado 'unalib'
describe('unalib', function() {
    //Dentro de 'unalib', estamos probando una función específica
    describe('función is_valid_phone', function() {
        //Esta es nuestra prueba actual. Estamos verificando si 'is_valid_phone' funciona 
        //correctamente para una entrada específica.
        it('debería devolver true para 8297-8547', function() {
            //Esta es la comprobación (o "afirmación"). Si es falso, 
            //la prueba fallará.
            assert.equal(val.is_valid_phone('8297-8547'), true);
        });
    });
});

describe('unalib', function () {

    describe('validateMessage', function () {
        it('should validate and convert an image URL to an image tag', function () {
            var input = '{"mensaje": "https://example.com/image.jpg"}';
            var expectedOutput = '{"mensaje":"<img src=\'https://example.com/image.jpg\' style=\'max-height: 400px;max-width: 400px;\'>"}';
            var result = val.validateMessage(input);
            assert.equal(result, expectedOutput);
        });

        it('should validate and convert a YouTube video URL to an embedded video code', function () {
            var input = '{"mensaje": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}';
            var expectedOutput = '{"mensaje":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/dQw4w9WgXcQ\' frameborder=\'0\' allow=\'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>"}';
            var result = val.validateMessage(input);
            assert.equal(result, expectedOutput);
        });

        it('should recognize and leave plain text as is', function () {
            var input = '{"mensaje": "Este es un texto."}';
            var expectedOutput = '{"mensaje":"Este es un texto."}';
            var result = val.validateMessage(input);
            assert.equal(result, expectedOutput);
        });
    });
});