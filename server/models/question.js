
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
var QuestionSchema = new mongoose.Schema({
 title: { type: String, required: true, minlength: 10},
 description: { type: String},
 answers: [{type: Schema.Types.ObjectId, ref: "answer"}]

},{timestamps: true });


// register the schema as a model
// We are setting this Schema in our Models as 'User'
mongoose.model('Question', QuestionSchema);
var Question = mongoose.model('Question');

mongoose.Promise = global.Promise;
