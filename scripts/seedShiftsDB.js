const mongoose = require("mongoose");
const db = require("../models/");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3"
);

const volShiftsSeed = [
    {
        userID: "a string",
        userEmail: "email@email.com",
        eventTitle: "food distro day", 
        eventLocation: "headquarters"
    },
    {
        userID: "a second string",
        userEmail: "email@otheremail.com",
        eventTitle: "break lig", 
        eventLocation: "headquarters"
    }
];

db.Shift
    .remove({})
    .then(() => db.Shift.collection.insertMany(volShiftsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
