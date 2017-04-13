'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSetSchema = new Schema({
  localAthurity:String,
  region: String,
  qoute: String,
  profilePicture: String,
  definition: String,
  answers: [
    {
      answerId: String,
      answer: String,
      answerValue: Number
    }
  ]
});

const DataSet = mongoose.model('dataSet', DataSetSchema);

module.exports = DataSet;
