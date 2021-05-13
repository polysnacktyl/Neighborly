const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')
// const userID = require("./user")

const resourceSchema = new mongoose.Schema({
    // userID: { type: String, required: true, unique: true },
    dateMade: { type: Date, default: Date.now },
    dateAvailable: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: String, required: true }

});
resourceSchema.plugin(uniqueValidator)
const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;