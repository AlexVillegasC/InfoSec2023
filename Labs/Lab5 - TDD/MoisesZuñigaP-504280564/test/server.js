const val = require('UNAnpm');
const assert = require('assert');

describe('UNAnpm', function () {
    // Prueba la función 'is_valid_phone' de la librería propia 'UNAnpm'
  describe('is_valid_phone', function () {
    // Se comprueba si la función 'is_valid_phone' devuelve 'true' para la entrada '8297-8547'
    it('Debe devolver true para 8297-8547', function () {
      assert.equal(val.is_valid_phone('8297-8547'), true);
    });
  });

  // Prueba la función 'is_valid_url_image' de la librería 'UNAnpm'
  describe('is_valid_url_image', function () {
    // Se realizan las comprobaciones de formatos
    it('Debe retornar true para los distintos formatos válidos de los URL de imágenes', function () {
        // los enlaces "http://example.com/image.(+extensión)" son imágnes ficticias para hacer las pruebas
      assert.equal(val.is_valid_url_image('http://example.com/image.jpg'), true);
      assert.equal(val.is_valid_url_image('http://example.com/image.gif'), true);
      assert.equal(val.is_valid_url_image('http://example.com/image.png'), true);
      assert.equal(val.is_valid_url_image('http://example.com/image.jpeg'), true);
      assert.equal(val.is_valid_url_image('http://example.com/image.bmp'), true);
    });

    it('Debe retornar false para los distintos formatos inválidos de los URL de imágenes', function () {
      assert.equal(val.is_valid_url_image('http://example.com/image.txt'), false);
      assert.equal(val.is_valid_url_image('https://example.com/image.doc'), false);
      assert.equal(val.is_valid_url_image('http://example.com/image.pdf'), false);
      assert.equal(val.is_valid_url_image('https://example.com/image'), false);
      assert.equal(val.is_valid_url_image('example.com/image.jpg'), false);
    });

    it('Debe retornar false para formatos que no sean string', function () {
      assert.equal(val.is_valid_url_image(1234), false);
      assert.equal(val.is_valid_url_image(null), false);
      assert.equal(val.is_valid_url_image(undefined), false);
      assert.equal(val.is_valid_url_image({}), false);
      assert.equal(val.is_valid_url_image([]), false);
    });
  });

  // Prueba la función 'getYTVideoId' de la librería 'UNAnpm'
  describe('is_valid_yt_video', function () {
    it('Debe retornar true para los distintos formatos válidos de los URL de YouTube', function () {
      assert.equal(val.is_valid_yt_video('https://www.youtube.com/watch?v=nOm__NU9Uvg'), true);
      assert.equal(val.is_valid_yt_video('http://youtu.be/nOm__NU9Uvg'), true);
      assert.equal(val.is_valid_yt_video('www.youtube.com/watch?v=nOm__NU9Uvg'), true);
      assert.equal(val.is_valid_yt_video('youtube.com/watch?v=nOm__NU9Uvg'), true);
    });

    it('Debe retornar false para los distintos formatos inválidos de los URL de YouTube', function () {
      assert.equal(val.is_valid_yt_video('https://www.google.com'), false);
      assert.equal(val.is_valid_yt_video('http://youtu.be/nOm__NU9Uvg1234'), false);
      assert.equal(val.is_valid_yt_video('www.youtube.com/watch?x=nOm__NU9Uvg'), false);
    });

    it('Debe retornar false para formatos que no sean string', function () {
      assert.equal(val.is_valid_yt_video(1234), false);
      assert.equal(val.is_valid_yt_video({}), false);
      assert.equal(val.is_valid_yt_video([]), false);
      assert.equal(val.is_valid_yt_video(null), false);
      assert.equal(val.is_valid_yt_video(undefined), false);
    });
  });

  // Prueba la función 'is_valid_yt_video' la librería 'UNAnpm'
  describe('getYTVideoId', function () {
    it('Debe devolver el id del video a partir del URL estándar de YouTube', function () {
      const url = 'https://www.youtube.com/watch?v=nOm__NU9Uvg';
      const result = val.getYTVideoId(url);
      assert.equal(result, 'nOm__NU9Uvg');
    });

    it('Debe devolver el id del video a partir del URL corto de YouTube', function () {
      const url = 'https://youtu.be/nOm__NU9Uvg';
      const result = val.getYTVideoId(url);
      assert.equal(result, 'nOm__NU9Uvg');
    });

    it('Debe devolver el id del vídeo de una URL de YouTube con parámetros adicionales', function () {
      const url = 'https://www.youtube.com/watch?v=nOm__NU9Uvg&feature=youtu.be';
      const result = val.getYTVideoId(url);
      assert.equal(result, 'nOm__NU9Uvg');
    });
  });

  describe('getEmbeddedCode', function () {
    it('Debe devolver el código incrustado de la URL de un vídeo de YouTube', function () {
      const url = 'https://www.youtube.com/watch?v=nOm__NU9Uvg';
      const expectedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/nOm__NU9Uvg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      const result = val.getEmbeddedCode(url);
      assert.equal(result, expectedCode);
    });
  });

  describe('getImageTag', function () {
    it('Debe retornar una etiqueta img con la URL proporcionada', function () {
      const url = 'https://example.com/image.jpg';
      const expectedTag = '<img src="https://example.com/image.jpg" style="max-height: 400px;max-width: 400px;">';
      const result = val.getImageTag(url);
      assert.strictEqual(result, expectedTag);
    });

    it('Debe funcionar con diferentes URL', function () {
      const url1 = 'https://example.com/image1.jpg';
      const url2 = 'https://example.com/image2.jpg';
      const result1 = val.getImageTag(url1);
      const result2 = val.getImageTag(url2);
      assert.notStrictEqual(result1, result2);
    });
  });

  describe('validateMessage', function () {
    it('Debe validar y convertir la URL de una imagen en una etiqueta de imagen', function () {
      const input = '{"mensaje": "https://example.com/image.jpg"}';
      const expectedOutput = '{"mensaje":"<img src=\\"https://example.com/image.jpg\\" style=\\"max-height: 400px;max-width: 400px;\\">"}';
      const result = val.validateMessage(input);
      assert.equal(result, expectedOutput);
    });

    it('Debe validar y convertir la URL de un vídeo de YouTube en un código de vídeo incrustado', function () {
      const input = '{"mensaje": "https://www.youtube.com/watch?v=nOm__NU9Uvg"}';
      const expectedOutput = '{"mensaje":"<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/nOm__NU9Uvg\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen></iframe>"}';
      const result = val.validateMessage(input);
      assert.equal(result, expectedOutput);
    });

    it('Debe reconocer y dejar el texto sin formato como está', function () {
      const input = '{"mensaje": "Este es un texto."}';
      const expectedOutput = '{"mensaje":"Este es un texto."}';
      const result = val.validateMessage(input);
      assert.equal(result, expectedOutput);
    });
  });
});
