const router = require("express").Router();
const WorkoutTracker = require("../models/workout_tracker.js");

//Grabs workouts from DB 
router.get("/api/workouts", (req, res) => {
    WorkoutTracker.find()
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});
