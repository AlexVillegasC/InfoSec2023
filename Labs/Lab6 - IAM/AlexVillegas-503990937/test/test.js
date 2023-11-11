// libreria unalib

var val = require('../unalib');
var assert = require('assert');

describe('unalib', function() {
    describe('funcion_is_valid_phone', function() {
        it('deberia devolver true para 8297-8547', function(){
            assert.equal(val.is_valid_phone('8297-8547'), true);
        });
    });
});



describe('unalib', function(){
    //Dentro de 'unalib', estamos probando una función especifica
    describe('getYTVideoId', function()  {
        it('deberia devolver el id del video a partir del url standar de Youtube ', function() {
            var url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            var result = val.getYTVideoId(url); // Asumiendo que val es el objeto que contiene tu función getYTVideoId
            assert.equal(result, 'dQw4w9WgXcQ');
        });



        it('deberia devolver el id del video a partir del url corto de Youtube', function() {
            var url = 'https://youtu.be/dQw4w9WgXcQ';
            var result = val.getYTVideoId(url); // Asumiendo que val es el objeto que contiene tu función getYTVideoId
            assert.equal(result, 'dQw4w9WgXcQ');
        });



        it('deberia devolver el id del vídeo de una URL de YouTube con parámetros adicionales', function() {
            var url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be';
            var result = val.getYTVideoId(url); // Asumiendo que val es el objeto que contiene tu función getYTVideoId
            assert.equal(result, 'dQw4w9WgXcQ');
        });
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
