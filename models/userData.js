const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:{type:String, default:"none"},
  answers:[{
    id:{type:String,required:true},
    answer:String
  }],
  date:{ type: Date, default: Date.now }
  // GEO location below
}, {_id:false});

const UserData = mongoose.model('user', UserSchema);

module.exports = UserData;
