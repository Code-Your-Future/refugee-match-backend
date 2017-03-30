'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');

// get the list from the db
router.get('/', function(req, res) {

  fs.readFile('./data/data.json', 'utf-8', (err, data) => {
    if (err) throw err
    return res.send(data);
  })
});

// post the list to the db
router.post('/', function(req, res) {
  res.send({type:'POST'});
  console.log("this is the data", req.body);

  // save it in data.json
  fs.readFile('./data/data.json', 'utf-8', function(err, data) {
  	if (err) throw err
    // we can handle the data here to add new one with the previouse data
  	fs.writeFile('./data/data.json', JSON.stringify(req.body), function(err) {
  		if (err) throw err
  	})
  })
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
