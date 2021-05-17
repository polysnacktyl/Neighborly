const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestsSchema = new Schema({
  title: { type: String, required: true },
  request: { type: String, required: true },
  authID: { type: String },
  Date: { type: Date, default: Date.now },
});

const Requests = mongoose.model("requests", requestsSchema);

module.exports = Requests;
