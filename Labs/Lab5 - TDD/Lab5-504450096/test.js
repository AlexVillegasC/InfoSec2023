// scripts de pruebas

//libreria unalib
var val = require('unalib');
var assert = require('assert');

// pruebas:

//estamos probando un modulo llamado 'unalib'
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver true para 8442-8968', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('8442-8968'), true);
        });

        it('Debería rechazar un número de teléfono incorrecto', function () {
            assert.equal(val.is_valid_phone('xxxxx'), false);
          });
        
        
        describe('unalib', function () {
            it('Debería validar un nombre correcto', function () {
              assert.equal(val.is_valid_name('Paula Fernandez'), true);
            });
          
            it('Debería rechazar un nombre incorrecto (vacío)', function () {
              assert.equal(val.is_valid_name(''), false);
            });
            describe('unalib', function () {
                it('Debería validar una cedula ', function () {
                  assert.equal(val.is_valid_cedula('504450096'), true);
                });
              
                it('Debería rechazar una cedula incorrecta', function () {
                  assert.equal(val.is_valid_cedula('xxxx'), false);
                });
        
        describe('unalib', function () {
          it('Debería validar una URL de imagen correcta', function () {
            assert.equal(val.is_valid_url_image('https://example.com/image.jpg'), true);
          });
      
          it('Debería rechazar una URL incorrecta', function () {
            assert.equal(val.is_valid_url_image('not_an_image'), false);
          });
        });
      
       
        });

    });

});
   

    }); 
