const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    questionId: String,
    question: String,
    options: [{answerId: String, answer: String}],
    questionType: String
},{autoIndexId:false});


const QuestionData = mongoose.model('question', QuestionSchema);

module.exports = QuestionData;
