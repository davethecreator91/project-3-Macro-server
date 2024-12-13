//----------------imports---------------------
const mongoose = require("mongoose");

//----------------schema-------------------------
const workoutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    sets: { type: Number, required: true },
});

//-----------------model-------------------------

module.exports = mongoose.model('Workout', workoutSchema);


//-----------------exports------------------------

module.exports = Workout