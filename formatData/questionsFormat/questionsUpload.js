'use strict'

// take the dataset.json
// format to a new json file
// insert it to the db

const fs = require('fs');
const QuestionsModel = require(`${process.cwd()}/models/questionData`);

let dataSet_list = [];
function formatQuestions(req, res, next) {
    fs.readFile('./data/questions.json', 'utf-8', function(err, data) {
        if(err) throw err; 
        const parsedData = JSON.parse(data);
        for(let i=0; i< parsedData.length; i++) {
            QuestionsModel.create(parsedData[i]).then(function(data) {
                console.log(data);
            });
            dataSet_list.push(parsedData[i]);
        }
        res.send(dataSet_list);
    })
}

module.exports = {
    questionsFormat:formatQuestions
};
