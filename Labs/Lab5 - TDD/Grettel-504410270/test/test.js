var val = require('unalib');
var assert = require('assert');

// Pruebas:

describe('unalib', function () {
    // Prueba para la función 'is_valid_phone'
    describe('función is_valid_phone', function () {
        it('debería devolver true para 8297-8547', function () {
            assert.equal(val.is_valid_phone('8297-8547'), true);
        });
    });

    // Prueba para la función 'is_valid_url_image'
    describe('función is_valid_url_image', function () {
        it('debería devolver true para una URL de imagen válida', function () {
            assert.equal(val.is_valid_url_image('https://example.com/image.jpg'), true);
        });

        it('debería devolver false para una URL que no es de imagen', function () {
            assert.equal(val.is_valid_url_image('https://example.com/not_an_image.txt'), false);
        });
    });

    // Prueba para la función 'is_valid_yt_video'
    describe('función is_valid_yt_video', function () {
        it('debería devolver true para una URL de video de YouTube válida', function () {
            assert.equal(val.is_valid_yt_video('https://www.youtube.com/watch?v=video_id'), true);
        });

        it('debería devolver false para una URL que no es de video de YouTube', function () {
            assert.equal(val.is_valid_yt_video('https://example.com/not_youtube_video.mp4'), false);
        });
    });
});
