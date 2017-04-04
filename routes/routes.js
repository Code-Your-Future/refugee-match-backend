'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');
const User = require('../models/userData');
const Question = require('../models/questionData');


// get the list from the db
router.get('/', function(req, res) {
  Question.find('show collections').then((val) =>{
    res.send(val);
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
