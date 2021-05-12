const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')


const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true }

});
userSchema.plugin(uniqueValidator)
const User = mongoose.model("User", userSchema);

module.exports = User;