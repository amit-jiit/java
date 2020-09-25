const mongoose = require('mongoose');
// connect to mongodb localhost testaroo database
mongoose.connect('mongodb://localhost/testaroo');

//listener of the event
// 'once'listen to this event once
//'on' keep listening all the event
mongoose.connection.once('open',function(){
console.log('connection has been made, now make fireworks');
}).on('error',function(error){
    console.log('connection error:',error);
});