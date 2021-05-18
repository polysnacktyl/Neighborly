const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')

const ShiftSchema = new mongoose.Schema({
    user: { type: String },
    eventTitle: { type: String },
    dateAvailable: { type: String, required: true },
    eventLocation: { type: String },
    eventDetails: { type: String },
    authID: { type: String }

});
ShiftSchema.plugin(uniqueValidator)
const Shift = mongoose.model("shifts", ShiftSchema);

module.exports = Shift;
