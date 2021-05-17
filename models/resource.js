const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')

const resourceSchema = new mongoose.Schema({
    user: { type: String },
    dateMade: { type: Date, default: Date.now },
    dateAvailable: { type: String, required: true },
    details: { type: String, required: true },
    status: { type: String, required: true },
    authID: {type: String, required: false}
});
resourceSchema.plugin(uniqueValidator)
const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
