const mongoose = require('mongoose');
//ES6 Promises
mongoose.Promise = global.Promise;
//connect to the database before test run
// this will run once
before(function(done){
// connect to mongodb localhost testaroo database
mongoose.connect('mongodb://localhost/testaroo');

//listener of the event
// 'once'listen to this event once
//'on' keep listening all the event
mongoose.connection.once('open',function(){
console.log('connection has been made, now make fireworks');
done();
}).on('error',function(error){
    console.log('connection error:',error);
});
});
//drop the characters collection before each test
// this will run before every single test
beforeEach(function(done){
// Drop thecollection
mongoose.connection.collections.mariochars.drop(function(){
done();
});
});
