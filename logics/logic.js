'use strict'

const fs = require('fs');

var d = [];

function formatDataSet(req, res, next) {
  fs.readFile('./data/dataSet.json', 'utf-8', function(err, data) {
    if(err) throw err;
    const dataset = JSON.parse(data);
    dataset.map(function(dataSet) {
      console.log(dataSet);
      var newDataSet = {};
      newDataSet.answers = [];
      for(var i in dataSet) {
        if(i === "Local Authority") {
          // we need one word for the key
          newDataSet.localAthurity = dataSet[i];
        } else if(i === "Region") {
            newDataSet.region = dataSet[i];
        } else {
            newDataSet["answers"].push({
              "answerId": "q1a1",
              "answer": i,
              "answerValue": dataSet[i]
            })
          }
        }
        // adding unique id to the answers
      newDataSet.answers.map((val) => {
        switch (val.answer) {
          case "Job opportunities":
            val.answerId = "q2a1";
            break;
          case "Cost of living":
            val.answerId = "q2a2";
            break;
          case "Quality of schools":
            val.answerId = "q2a3";
            break;
          case "Level of crime":
            val.answerId = "q2a4";
            break;
          case "English teaching":
            val.answerId = "q3a1";
            break;
          case "Practical training":
            val.answerId = "q3a2";
            break;
          case "University":
            val.answerId = "q3a3";
            break;
          case "Mosque":
            val.answerId = "q4a1";
            break;
          case "Church":
            val.answerId = "q4a2";
            break;
          case "Synagogue":
            val.answerId = "q4a3";
            break;
          case "Hindu temple":
            val.answerId = "q4a4";
            break;
          case "Sikh temple":
            val.answerId = "q4a5";
            break;
          case "Buddhist temple":
            val.answerId = "q4a6";
            break;
          case "Administration":
            val.answerId = "q5a1";
            break;
          case "Manufacturing":
            val.answerId = "q5a2";
            break;
          case "Education":
            val.answerId = "q5a3";
            break;
          case "Construction":
            val.answerId = "q5a4";
            break;
          case "Retail":
            val.answerId = "q5a5";
            break;
          case "Health and Social work":
            val.answerId = "q5a6";
            break;
          case "Electricity, Gas and Water":
            val.answerId = "q5a7";
            break;
          case "Hotel and Restaurant":
            val.answerId = "q5a8";
            break;
          case "Agriculture":
            val.answerId = "q5a9";
            break;
          case "Business":
            val.answerId = "q5a10";
            break;
          case "Countryside":
            val.answerId = "q6a1";
            break;
          case "oldcity":
            val.answerId = "q6a2";
            break;
          case "moderncity":
            val.answerId = "q6a3";
            break;
          case "Urban":
            val.answerId = "q7a1";
            break;
          case "Rural":
            val.answerId = "q7a2";
            break;
          case "Don’t mind":
            val.answerId = "q7a3";
            break;

          }
        });
        d.push(newDataSet);

      }); // map through all files ends here

    }); // reading the file ends here
    res.send(d);
}

module.exports = {
  formatData: formatDataSet
}
