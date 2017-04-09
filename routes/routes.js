'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');
const Question = require('../models/questionData');
const DataSet = require('../models/dataSet');
const Results = require('../logics/result');

// this on is to add the json to the db
// const DataSetLogic = require('../logics/dataSetLogic');



// format the dataset to insert in the db
router.get('/dataset', function(req, res, next) {
  DataSet.find().then(function(data) {
    res.send(data);
  });
});
// show the results
router.get('/results', Results);

// show questions
router.get('/questions', function(req, res) {
  Question.find().then(function(questionData) {
    res.send(questionData);
  });

});

// post the list to the db
router.post('/', Results);

// update the list in the db
router.put('/:id', function(req, res) {
  res.send({type:'PUT'});
});

// delete the list from the db
router.get('/:id', function(req, res) {
  res.send({type:'DELETE'});
});

module.exports = router;
