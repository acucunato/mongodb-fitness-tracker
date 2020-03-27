// Routes
// When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.

// The user should be able to:

// * Add exercises to a previous workout plan.

// * Add new exercises to a new workout plan.

// * View multiple the combined weight of multiple exercises on the `stats` page.

const db = require("../models");

module.exports = function(app) {
  // api/workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //api/workouts POST creates a new workout

  // api/workouts/:id

  // api/workouts/range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
