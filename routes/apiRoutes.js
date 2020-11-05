const db = require('../models')

module.exports = (app) => {

  //Get workout
  app.get("/api/workouts", (req, res) => {
      db.Workout.find({}, (err, workouts) => {
          if(err){
              console.log(err);
          } else {
              res.json(workouts)
          }
      });
  });

  //Create workout
  app.post("/api/workouts", (req, res) => {
    workouts.create({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

//Update workout
  app.put("/api/workouts/:id", (req, res) => {
    workouts.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },

      { new: true, runValidators: true }
    )
    .then(workouts => {
      res.json(workouts);
    })
  });

  app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({})
      .then(workout => {
          res.json(workout);
      })
      .catch(err => {
          res.json(err);
      });
  }); 
}