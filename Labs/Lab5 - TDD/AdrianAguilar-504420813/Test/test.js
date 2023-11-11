// scripts de pruebas

//libreria unalib
var val = require('unalib');
var assert = require('assert');

// pruebas:

//estamos probando un modulo llamado 'unalib'
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver true para 6196-8116', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('6196-8116'), true);
        });

        it('Es Palindromo Happy PAath', function () {
            assert.equal(val.esPalindromo('oso'), true);
          });
        });
      
        describe('unalib', function () {
          it('Debería validar una URL de imagen correcta', function () {
            assert.equal(val.is_valid_url_image('https://example.com/image.jpg'), true);
          });
      
          it('Debería rechazar una URL incorrecta', function () {
            assert.equal(val.is_valid_url_image('not_an_image'), false);
          });
        });
      
        describe('unalib', function () {
          it('Debería validar una URL de video de YouTube correcta', function () {
            assert.equal(val.is_valid_yt_video('https://www.youtube.com/watch?v=videoId'), true);
          });
      
          it('Debería rechazar una URL incorrecta', function () {
            assert.equal(val.is_valid_yt_video('not_a_youtube_video'), false);
          });
        });
      
       
      
          

    });
