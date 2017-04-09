'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSetSchema = new Schema({
  answers: [
    {
      answerId: String,
      answer: String,
      answerValue: Number
    }
  ],
  localAthurity:String,
  region: String
});

const DataSet = mongoose.model('dataSet', DataSetSchema);

module.exports = DataSet;
