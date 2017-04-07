const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:{type:String, default:"none"},
  answers:[{
    answerId:{type:String,required:true},
    answer:String,
    answerValue:Number
  }],
  date:{ type: Date, default: Date.now }
  // GEO location below
});

const UserData = mongoose.model('user', UserSchema);

module.exports = UserData;
