const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userID: {type: String, required: true},
    userEmail: {type: String, required: true}
  });
  
  const User = mongoose.model("User", userSchema);

  module.exports = User;