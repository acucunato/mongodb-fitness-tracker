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
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // PUT route updates exercises by id
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

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
