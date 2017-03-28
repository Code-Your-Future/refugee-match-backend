'use strict'
// add before handle sumbit
// getting answers from the interface

const express = require('express');
const router = express.Router();

// get the list from the db
router.get('/', function(req, res) {
  res.send({type:'GET'});
});

// post the list to the db
router.post('/', function(req, res) {
  res.send({type:'POST'});
});

// update the list in the db
router.put('/:id', function(req, res) {
  res.send({type:'PUT'});
});

// delete the list from the db
router.get('/:id', function(req, res) {
  res.send({type:'DELETE'});
});

module.exports = router;
