var val = require('unalib');
 var assert = require('assert');
  //Pruebas
 
 
 //Estamos probando un modulo 'unalib'
 describe('unalib', function(){
    //Dentro de 'unalib', estamos probando una función especifica
    describe('función is_valid_phone', function(){
        //Esta es nuestra prueba actual. Estamos verificando si is_valid_phone
        //funciona correctamente oara una entrada especifica
        it('debería devolver true para 8297-8547',function(){
            //Esta es la comprobación (o 'afirmación'). Si es falsol, la prueba fallará.
            assert.equal(val.is_valid_phone('8297-8547'),true);
        });
    });
 });
 
 describe('unalib', function(){
    //Dentro de 'unalib', estamos probando una función especifica
    describe('is_valid_url_image', function() {
        it('Debería retornar true para los distintos formatos validos de los URL de imagenes', function() {
          assert.equal(val.is_valid_url_image('http://example.com/image.jpg'),true);
          assert.equal(val.is_valid_url_image('http://example.com/image.gif'),true);
          assert.equal(val.is_valid_url_image('http://example.com/image.png'),true);
          assert.equal(val.is_valid_url_image('http://example.com/image.jpeg'),true);
          assert.equal(val.is_valid_url_image('http://example.com/image.bmp'),true);
        });
      
        it('Debería retornar false para los distintos formatos inválidos de los URL de imagenes', function() {
            assert.equal(val.is_valid_url_image('http://example.com/image.txt'),false);
            assert.equal(val.is_valid_url_image('https://example.com/image.doc'),false);
            assert.equal(val.is_valid_url_image('http://example.com/image.pdf'),false);
            assert.equal(val.is_valid_url_image('https://example.com/image'),false);
            assert.equal(val.is_valid_url_image('example.com/image.jpg'),false);
        });

        it('Debería retornar false para formatos que no sean string', function() {
            assert.equal(val.is_valid_url_image(123),false);
            assert.equal(val.is_valid_url_image(null),false);
            assert.equal(val.is_valid_url_image(undefined),false);
            assert.equal(val.is_valid_url_image({}),false);
            assert.equal(val.is_valid_url_image([]),false);
        });
      });
 });


 describe('unalib', function(){
    //Dentro de 'unalib', estamos probando una función especifica
    describe('is_valid_yt_video', function() {
        it('Debería retornar true para los distintos formatos validos de los URL de youtube', function()  {
            assert.equal(val.is_valid_yt_video('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),true);
            assert.equal(val.is_valid_yt_video('http://youtu.be/dQw4w9WgXcQ'),true);
            assert.equal(val.is_valid_yt_video('www.youtube.com/watch?v=dQw4w9WgXcQ'),true);
            assert.equal(val.is_valid_yt_video('youtube.com/watch?v=dQw4w9WgXcQ'),true);
        });
      
        it('Debería retornar false para los distintos formatos invalidos de los URL de youtube', function()  {
            assert.equal(val.is_valid_yt_video('https://www.google.com'),false);
            assert.equal(val.is_valid_yt_video('http://youtu.be/dQw4w9WgXcQ123'),false);
            assert.equal(val.is_valid_yt_video('www.youtube.com/watch?x=dQw4w9WgXcQ'),false);
        });
      
        it('Debería retornar false para formatos que no sean string', function() { 
            assert.equal(val.is_valid_yt_video(123),false);
            assert.equal(val.is_valid_yt_video({}),false);
            assert.equal(val.is_valid_yt_video([]),false);
            assert.equal(val.is_valid_yt_video(null),false);
            assert.equal(val.is_valid_yt_video(undefined),false);   
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

describe('unalib', function() {
    describe('getEmbeddedCode', function()  {
        it('deberia devolver el código incrustado de la URL de un vídeo de YouTube', function() {
            var url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            var expectedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            var result = val.getEmbeddedCode(url); // Asumiendo que val es el objeto que contiene tu función getEmbeddedCode
            assert.equal(result, expectedCode);
        });
    });
});

describe('unalib', function(){
//Dentro de 'unalib', estamos probando una función especifica
    describe('getImageTag', function() {
        it('debería retornar una etiqueta img con la URL proporcionada', function() {
        var url = 'https://example.com/image.jpg';
        var expectedTag = '<img src="https://example.com/image.jpg" style="max-height: 400px;max-width: 400px;">';
        var result = val.getImageTag(url);
        assert.strictEqual(result, expectedTag);
        });

        it('debería funcionar con diferentes URLs', function() {
        var url1 = 'https://example.com/image1.jpg';
        var url2 = 'https://example.com/image2.jpg';
        var result1 = val.getImageTag(url1);
        var result2 = val.getImageTag(url2);
        assert.notStrictEqual(result1, result2);
        });
    });
});

describe('unalib', function() {
    describe('validateMessage', function()  {
      it('should validate and convert an image URL to an image tag', function() {
        var input = '{"mensaje": "https://example.com/image.jpg"}';
        var expectedOutput = '{"mensaje":"<img src=\\"https://example.com/image.jpg\\" style=\\"max-height: 400px;max-width: 400px;\\">"}';
        var result = val.validateMessage(input);
        assert.equal(result, expectedOutput);
      });
  
      it('should validate and convert a YouTube video URL to an embedded video code', function() {
        var input = '{"mensaje": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}';
        var expectedOutput = '{"mensaje":"<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/dQw4w9WgXcQ\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>"}';
        var result = val.validateMessage(input);
        assert.equal(result, expectedOutput);
      });
  
      it('should recognize and leave plain text as is', function() {
        var input = '{"mensaje": "Este es un texto."}';
        var expectedOutput = '{"mensaje":"Este es un texto."}';
        var result = val.validateMessage(input);
        assert.equal(result, expectedOutput);
      });
    });
});