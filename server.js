// Add code to userModel.js to complete the model

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/custommethoddb",
  { useNewUrlParser: true }
);

// Routes
// When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

// The user should be able to:

// * Add exercises to a previous workout plan.

// * Add new exercises to a new workout plan.

// * View multiple the combined weight of multiple exercises on the `stats` page.

db.Library.create({ name: "Campus Library" })
  .then(dbLibrary => {
    console.log(dbLibrary);
  })
  .catch(({ message }) => {
    console.log(message);
  });

app.post("/submit", ({ body }, res) => {
  db.Book.create(body)
    .then(({ _id }) =>
      db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true })
    )
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/books", (req, res) => {
  db.Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/library", (req, res) => {
  db.Library.find({})
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/populated", (req, res) => {
  db.Library.find({})
    .populate("books")
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });
});
// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
