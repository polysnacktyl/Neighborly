const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import userID from "./user";

const requestSchema = new Schema({
  userID,
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  message: { type: String, required: true },
});

const Requests = mongoose.model("Requests", requestSchema);

module.exports = Requests;
