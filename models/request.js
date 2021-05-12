const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user")


const requestSchema = new Schema({
  User,
  reqID: {type: String, required: true, unique: true},
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  message: { type: String, required: true },
});

const Requests = mongoose.model("Requests", requestSchema);

module.exports = Requests;
