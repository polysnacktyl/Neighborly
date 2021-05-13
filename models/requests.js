const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const requestsSchema = new Schema({
  title: { type: String, required: true },
  Date: { type: Date, default: Date.now },
  request: { type: String, required: true },
});

const requests = mongoose.model("requests", requestsSchema);

module.exports = requests;