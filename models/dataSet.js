'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const DataSetShema = new Schema({
  Local_Authority:String,
  Region: String,
  answers: [
    {
      answerId: String,
      answer: String,
      answerValue: Number
    }
  ]
});

const DataSet = mongoose.model('dataSet', DataSetShema);

module.exports = dataSet;
