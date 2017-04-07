'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');
const User = require('../models/userData');
const Question = require('../models/questionData');
const Logic = require('../logics/logic');


// get the list from the db
router.get('/E', Logic.formatData);

router.get('/', function(req, res) {
  Question.find().then((val) => {
    res.send(val);
  })

});

router.get('/D1', function(req, res) {
  fs.readFile('./data/D1.json', "utf-8", (err, data) => {
    const parseData = JSON.parse(data)
    res.send(parseData)
  })

});
router.get('/D', function(req, res) {
  fs.readFile('./data/D.json', "utf-8", (err, data) => {
    const parseData = JSON.parse(data)
    res.send(parseData)
  })

});
router.get('/D2', function(req, res) {
  fs.readFile('./data/D2.json', "utf-8", (err, data) => {
    const parseData = JSON.parse(data)
    res.send(parseData)
  })

});


// post the list to the db
router.post('/', function(req, res) {
  // mongodb start
  User.create(req.body).then(function(user) {
    res.send(user);
  });
  // mongodb ends
})

// update the list in the db
router.put('/:id', function(req, res) {
  res.send({type:'PUT'});
});

// delete the list from the db
router.get('/:id', function(req, res) {
  res.send({type:'DELETE'});
});

module.exports = router;
