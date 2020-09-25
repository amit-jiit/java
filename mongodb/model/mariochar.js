const mongoose = require('mongoose');
// create schema
const Schema = mongoose.Schema;
const MarioCharSchema = new Schema({
name: String,
weight : Number
});

// create model
//'mariochar' is a collection and is based on 'MarioCharSchema' schema
const MarioChar = mongoose.model('mariochar',MarioCharSchema)
// exporting it so that we can use it in other file
module.exports = MarioChar ;