const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')
// const db = require("../models/resources");


const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true },
  resources: { type: String, required: true, unique: true },
  requests: { type: String, required: true, unique: true },
  shifts: { type: String, required: true, unique: true },

});


userSchema.plugin(uniqueValidator)
const User = mongoose.model("User", userSchema);

module.exports = User;