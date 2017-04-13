'use strict'

const DataSetModel = require('../models/dataSet');
const User = require('../models/userData');




function matchingAnswersValues(req, res, next) {
  // none modified matching version
  let allResults = [];
  // after modification
  let topThreeResults = [];


  let userAnswers = req.body;
  console.log(req.body);

  User.create(req.body).then(function(userData) {
    console.log(userData)
  });

  DataSetModel.find({}).then(function(dataSets) {
    dataSets.map(function(dataSet) {
      // setting temperory object
      let newDataSet = {};
      // setting temperory answers array
      newDataSet.answers = [];
      // mapping through request body
      dataSet.answers.map(function(dataSetAnswer) {
        // this one should be request body mapping :)
        userAnswers.answers.map(function(userAnswer) {
          if((userAnswer.answerId === dataSetAnswer.answerId)) {
            newDataSet.answers.push(dataSetAnswer);
          }
        }); // mapping through userData ends
      }); // mapping through the dataSetAnswers
      newDataSet.localAthurity = dataSet.localAthurity;
      newDataSet.region = dataSet.region;
      allResults.push(newDataSet);
    }); // end of mapping through dataSets
    // here is the final array
    return allResults;
  }).then(function(allResults) {
  allResults.map(function(dataSet) {
    // setting temperory object
    let newDataSet = {};
    // setting score
    let score = 0;
    dataSet.answers.map(function(dataSetAnswer) {
      userAnswers.answers.map(function(userAnswer) {
        if((userAnswer.answerId === dataSetAnswer.answerId)) {
          switch (dataSetAnswer.answerId) {
            case 'q2a1':
              score += userAnswer.answerValue * dataSetAnswer.answerValue;
              break;
            case 'q2a2':
            score += userAnswer.answerValue * dataSetAnswer.answerValue;
              break;
            case 'q2a3':
            score += userAnswer.answerValue * dataSetAnswer.answerValue;
              break;
            case 'q2a4':
            score += userAnswer.answerValue * dataSetAnswer.answerValue;
              break;
            default:
            score += dataSetAnswer.answerValue;

          } // switch ends
        }
    }); // user's answer mapping ends
    newDataSet.score = score;
  }); // data set's answers ends
  newDataSet.localAthurity = dataSet.localAthurity;
  newDataSet.region = dataSet.region;
  topThreeResults.push(newDataSet);
  }); // end of allResults's mapping
  return topThreeResults;
}).then(function(scores) {
  scores.sort(function(a,b) {
    if(a.score < b.score)
      return 1;
    if(a.score > b.score)
      return -1;
    return 0;
  });
  return scores;
}).then(function(score) {
  let topResults = [];
  topResults = [score[0], score[1], score[2]];

  res.send(topResults);

}); // end of Promise
}// end of the resultsLogic function

// send the whole 

module.exports = matchingAnswersValues;
