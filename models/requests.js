const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const requestsSchema = new Schema({
  reqID: {type: String, required: true, unique: true},
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  request: { type: String, required: true },
});

const requests = mongoose.model("requests", requestsSchema);

module.exports = requests;
