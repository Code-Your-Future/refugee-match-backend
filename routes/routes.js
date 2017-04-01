'use strict'

const express = require('express');
const router = express.Router();
const fs = require('fs');


// get the list from the db
router.get('/', function(req, res) {

  fs.readFile('./data/collectedUsersData.json', 'utf-8', function (err, data) {
    if (err) throw err;

    const newData = JSON.parse(data);

    res.send(newData);
  })
});
router.get('/results', function(req, res) {

  fs.readFile('./data/mockResultsData.json', 'utf-8', function(err, data){
    if(err) throw err;

    const newData = JSON.parse(data);

    res.send(newData);
  })
});
// post the list to the db
router.post('/', function(req, res) {
  let userData = {
    id: 0,
    name: "none",
    answers: ""
  }
  res.send({type:'POST'});
  // console.log("this is the data", req.body);

  // save it in data.json
  fs.readFile('./data/collectedUsersData.json', 'utf-8', function(err, data) {
  	if (err) throw err
    // we can handle the data here to add new one with the previouse data

    // push the request body to an array
    let answersArry = [];
    answersArry.push(req.body);

    // parse the collected data
    let parsedUsersData = JSON.parse(data);

    // if collectedUsersData is empty
    if(data === "[]"){
      // add the answer to the object
      userData.answers = answersArry;
      //pushing the object to paresed file
      parsedUsersData.push(userData);
    } else {

      userData.id = parsedUsersData.length ;
      userData.answers = answersArry;
      parsedUsersData.push(userData);

    }
  	fs.writeFile('./data/collectedUsersData.json', JSON.stringify(parsedUsersData), function(err) {
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
