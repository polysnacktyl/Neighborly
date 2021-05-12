const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')

const ShiftSchema = new mongoose.Schema({
    //claimed by 
    userID: { type: String },
    userEmail: { type: String },
    eventTitle: { type: String },
    eventLocation: { type: String },
    
});
ShiftSchema.plugin(uniqueValidator)
const Shift = mongoose.model("shifts", ShiftSchema);

module.exports = Shift;
