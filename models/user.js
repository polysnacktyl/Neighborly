const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')
// const db = require("../models/resources");


const userSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true },
  // user: [{
  //   _type: Schema.Types.ObjecId, get type() {
  //     return this._type;
  //   },
  //   set type(value) {
  //     this._type = value;
  //   },
  //   ref: 'user.email'
  // }],
  user: [{ type: String, ref: 'user.email' }],

});


userSchema.plugin(uniqueValidator)
const User = mongoose.model("User", userSchema);

module.exports = User;