const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3",
    { useNewUrlParser: true }
);

const requestsSeed = [
    {
      title: "humor me",
      date,
      request: "i am tired", 
    },
    {
        title: "dance",
        date,
        request: "wake up"
    }
];

db.requests
    .deleteOne({})
    .then(() => db.requests.collection.insertMany(requestsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
