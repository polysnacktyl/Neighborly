const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb:localhost/project3', {
  useNewUrlParser: true,
  useFindAndModify: false
});

const requestsSeed = [
    {
      title: "humor me",
      Date: { type: Date, default: Date.now },
      request: "i am tired", 
    },
    {
        title: "dance",
        Date: { type: Date, default: Date.now },
        request: "wake up"
    }
];

db.Requests
    .remove({})
    .then(() => db.Requests.collection.insertMany(requestsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })