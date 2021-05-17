const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')
// const db = require("../models/resources");


const userSchema = new mongoose.Schema({
  userID: { type: String, required: false, unique: true },
  userEmail: { type: String, required: false, unique: true },
  resources: { type: String, required: false, unique: true },
  requests: { type: String, required: false, unique: true },
  shifts: { type: String, required: false, unique: true },
  authID: { type: String }
});


userSchema.plugin(uniqueValidator)
const User = mongoose.model("User", userSchema);

module.exports = User;