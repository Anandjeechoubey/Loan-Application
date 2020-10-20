var mongoose = require("mongoose");

var responseSchema = new mongoose.Schema({
   firstname: String,
   lastname: String,
   dob: Date,

   amount: Number,
   duration: Number,
   repaymentSrc: String,
   desc: String,

   firm: String,
   salary: Number,
   expense: Number,
   assetDesc: String,

   email: String,
   mob: Number,
   address: String,
   address2: String,
   city: String,
   state: String,
   zip: Number
});

module.exports = mongoose.model("Response",responseSchema);