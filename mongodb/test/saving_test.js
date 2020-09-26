//it will work without mocha
const mocha = require('mocha');
const assert = require('assert');
//importing MarioChar file from model folder
const MarioChar = require('../model/mariochar');
//describe tests,'describe' whole block
describe('saving records',function(){
//create tests,'it' describe one test
it('saves a record to the database',function(done){

// creating record
// creating instance of MarioChar model
var char = new MarioChar({
    name:'Mario'
});
//save the record to database
//'then'it will complete the save process then only fire the 
//'then' used for asynchronomous request
char.save().then(function(){
 assert(char.isNew===false)// 'char' is no longer new it has been saved to database
 done();//passes done parameter in function
});
});
// we can start next test from here
});