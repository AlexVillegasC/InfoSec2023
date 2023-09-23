// scripts de pruebas

//libreria unalib
var val = require('unalib');
var assert = require('assert');

// pruebas:

//estamos probando un modulo llamado 'unalib'
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver true para 8297-8547', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('8297-8547'), true);
        });
    });
});

describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver false para 8729E5O8', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('8729E5O8'), false);
        });
    });
});

describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_url_image'
    describe('funcion is_valid_url_image', function () {
        it('deberia devolver false para https://i.pinimg.com/564x/10/7a/97/107a97ca5bd4a571edcebec54a66fc32.jpg', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_url_image('https://i.pinimg.com/564x/10/7a/97/107a97ca5bd4a571edcebec54a66fc32.jpg'), true);
        });
    });
});

describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_url_image'
    describe('funcion is_valid_url_image', function () {
        it('deberia devolver false para https://www.youtube.com/watch?v=_U9_35O4ZMQ', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_url_image('https://www.youtube.com/watch?v=_U9_35O4ZMQ'), false);
        });
    });
});

describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_yt_video'
    describe('funcion is_valid_yt_video', function () {
        it('deberia devolver true para https://www.youtube.com/watch?v=_U9_35O4ZMQ', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_yt_video('https://www.youtube.com/watch?v=_U9_35O4ZMQ'), true);
        });
    });
});

describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_yt_video'
    describe('funcion is_valid_yt_video', function () {
        it('deberia devolver false para https://x.com/HIDDENTIPS_/status/1705173077024456707?s=20', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_yt_video('https://x.com/HIDDENTIPS_/status/1705173077024456707?s=20'), false);
        });
    });
});