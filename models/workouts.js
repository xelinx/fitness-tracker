const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
            type: String,
            required: "Enter the type of exercise"
          },
          name: {
            type: String,
            required: "Enter the exercise"
          },
          duration: {
            type: Number,
            required: "Enter the duration in minutes"
          },
          weight: {
            type: Number,
          },
          reps: {
            type: Number,
          },
          sets: {
            type: Number,
          },
          distance: {
            type: Number,
        }
      }
    ]
  },
  {
    toJSON: {
      // Include virtual property
      virtuals: true
    }
  }
);

// Add property
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;