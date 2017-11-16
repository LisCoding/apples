// require mongoose
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create schema
var AnswerSchema = new mongoose.Schema({
 _question: {type: Schema.Types.ObjectId, ref: 'question'},
 content: { type: String, required: true, minlength: 5},
 details: { type: String},
 author: {type: String, required: true, minlength: 3},
 likes: { type: Number}
},{timestamps: true });


// register the schema as a model
// We are setting this Schema in our Models as 'Answer'
mongoose.model('Answer', AnswerSchema);
var Answer = mongoose.model('Answer');

mongoose.Promise = global.Promise;
