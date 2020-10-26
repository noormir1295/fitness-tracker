const router = require("express").Router();
const WorkoutTracker = require("../models/workout-tracker.js");

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

//route to create workouts
router.post("/api/workouts", (req, res) => {
  WorkoutTracker.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//grabbing id for routes 
router.put("/api/workouts/:id", ({ body, params }, res) => {
    WorkoutTracker.findByIdAndUpdate
    (
    params.id,
    { $push: { exercises: body } }, { new: true, runValidators: true }
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//Shows workouts limits to 7 since given HTML for tracker only shows 1 week 
router.get("/api/workouts/range", (req, res) => {
    WorkoutTracker.find({}).sort({'day': 1}).limit(7)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});


module.exports = router;

