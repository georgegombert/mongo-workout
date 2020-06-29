const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  distance: {
    type: Number
  },
  duration: {
    type: Number
  },
  weight: {
    type: Number
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  }
});

const workoutSchema = new Schema({
  totalDuration: {
    type: Number,
    default: 0
  },
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [exerciseSchema]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
