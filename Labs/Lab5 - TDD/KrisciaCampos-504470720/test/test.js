var val = require('unalib');
var assert = require('assert');

//estamos probando un modulo llamado 'unalib'
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver true para 8792-0399', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('8792-0399'), true);
        });
    });
});

describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver false para 8792E5O8', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('8729E5O8'), false);
        });
    });
});

describe('unalib', function () {
    // Dentro de 'unalib', estamos probando una función específica llamada 'is_valid_url_image'
    describe('funcion is_valid_url_image', function () {
      it('debería devolver true para una URL de imagen válida', function () {
        const url = 'https://example.com/image.jpg';
        const result = is_valid_url_image(url);
        assert.strictEqual(result, true);
      });
  
      it('debería devolver false para una URL que no es una imagen', function () {
        const url = 'https://example.com/not_an_image.txt';
        const result = is_valid_url_image(url);
        assert.strictEqual(result, false);
      });
  
      it('debería devolver false para una URL inválida', function () {
        const url = 'invalid_url';
        const result = is_valid_url_image(url);
        assert.strictEqual(result, false);
      });
    });
  });
  