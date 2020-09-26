//it will work without mocha
const mocha = require('mocha');
const assert = require('assert');
//describe tests,'describe' whole block
describe('some demo tests',function(){
//create tests,'it' describe one test
it('adds two numbers together',function(){
assert(2+3===5);//predicting the test
});

});