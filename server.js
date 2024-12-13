//-------------------imports---------------------
const express =  require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const Macros  = require("./models/macros.js");
const Workout = require("./models/workouts.js")

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });




//--------------routes---------------------

// Create: Add a consumed item
app.post('/macros', async (req, res) => {
  const newEntry = await Macros.create(req.body);
  res.json(newEntry);
});


// Read: Get all consumed items
app.get('/macros', async (req, res) => {
  const entries = await Macros.find();
  res.json(entries);
});


// Update: Edit a consumed item
app.put('/macros/:id', async (req, res) => {
  const updatedEntry = await Macros.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    { new: true }
  );
  res.json(updatedEntry);
});


// Delete: Remove a consumed item
app.delete('/macros/:id', async (req, res) => {
  const deletedEntry = await Macros.findByIdAndDelete(req.params.id);
  res.json(deletedEntry);
});


// **Workout CRUD API**
// Add Workout 
app.post('/workouts', async (req, res) => {
  const createdWorkout = await Workout.create(req.body);
  res.json(createdWorkout);
});


//  Read  See Workout that been completed 
app.get('/workouts', async (req, res) => {
  const foundWorkouts = await Workout.find();
  res.json(foundWorkouts);
});


// Update Workout that allready been done
app.put('/workouts/:workoutId', async (req, res) => {
  const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.workoutId,
      req.body,
      { new: true }
  );
  res.json(updatedWorkout);
});


// Delete Workout
app.delete('/workouts/:workoutId', async (req, res) => {
  const deletedWorkout = await Workout.findByIdAndDelete(req.params.workoutId);
  res.json(deletedWorkout);
});


//------------------listener--------------------
  app.listen(3001, () => {
    console.log('The express app is ready!');
  });