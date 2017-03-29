'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');

let data = {};

// get the list from the db
router.get('/', function(req, res) {
  res.send(data);
});

// post the list to the db
router.post('/', function(req, res) {
  // save it in data.json
  fs.readFile('./data/data.json', 'utf-8', function(err, data) {
  	if (err) throw err
    // we can handle the data here to add new one with the previouse data
  	fs.writeFile('./data/data.json', JSON.stringify(req.body), 'utf-8', function(err) {
  		if (err) throw err
  	})
  })
  data = req.body;
  console.log(req.body);
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
