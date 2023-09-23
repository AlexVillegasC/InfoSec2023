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

//devuelve false para un numero malo
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_phone'
    describe('funcion is_valid_phone', function () {
        it('deberia devolver false para fiorella', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_phone('Fiorella'), false);
        });
    });
});


//devuelve true

describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_url_image'
    describe('funcion is_valid_url_image', function () {
        it('deberia devolver true para https://img.freepik.com/vector-gratis/lindo-unicornio-bebiendo-te-leche-boba-ilustracion-icono-vector-dibujos-animados-arco-iris-icono-bebida-animal_138676-7412.jpg?w=2000', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_url_image('https://img.freepik.com/vector-gratis/lindo-unicornio-bebiendo-te-leche-boba-ilustracion-icono-vector-dibujos-animados-arco-iris-icono-bebida-animal_138676-7412.jpg?w=2000'), true);
        });
    });
});



//deberia devolver false para lo que no sea un video
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_url_image'
    describe('funcion is_valid_url_image', function () {
        it('deberia devolver false para https://www.youtube.com/watch?v=-ca0diwHXJA', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_url_image('https://www.youtube.com/watch?v=-ca0diwHXJA'), false);
        });
    });
});

//deberia devolver true para un video
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_url_image'
    describe('funcion is_valid_yt_video', function () {
        it('deberia devolver true para https://www.youtube.com/watch?v=-ca0diwHXJA', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_yt_video('https://www.youtube.com/watch?v=-ca0diwHXJA'), true);
        });
    });
});

//deberia devolver false para una imagen
describe('unalib', function () {
    //dentro de 'unalib', estamos probando una funcion especifica llamada 'is_valid_url_image'
    describe('funcion is_valid_yt_video', function () {
        it('deberia devolver false para https://img.freepik.com/vector-gratis/lindo-unicornio-bebiendo-te-leche-boba-ilustracion-icono-vector-dibujos-animados-arco-iris-icono-bebida-animal_138676-7412.jpg?w=2000', function () {
            // esta es la comprobacion (o "afirmacion"). Si es falso, 
            assert.equal(val.is_valid_yt_video('https://img.freepik.com/vector-gratis/lindo-unicornio-bebiendo-te-leche-boba-ilustracion-icono-vector-dibujos-animados-arco-iris-icono-bebida-animal_138676-7412.jpg?w=2000'), false);
        });
    });
});