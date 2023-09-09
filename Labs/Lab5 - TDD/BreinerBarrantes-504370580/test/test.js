var val = require('unalib');
var assert = require('assert');

describe('unalib', function(){
    describe('funcion is_valid_phone',function(){
        it('deberia devolver true para 82978547',function(){
            assert.equal(val.is_valid_phone('8297-8547'), true);
        })
    })
})