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
  app.post("/api/workouts", async (req, res)=> {
    try{
        const response = await db.Workout.create({type: "workout"})
        res.json(response);
    }
    catch(err){
        console.log("error occurred creating a workout: ", err)
    }
})

//Update workout
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
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