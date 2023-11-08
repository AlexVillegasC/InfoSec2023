// libreria unalib

var val = require('../unalib');
var assert = require('assert');

describe('unalib', function() {
    describe('funcion_is_valid_phone', function() {
        it('deberia devolver true para 8792-0399', function(){
            assert.equal(val.is_valid_phone('8792-0399'), true);
        });
    });
});
