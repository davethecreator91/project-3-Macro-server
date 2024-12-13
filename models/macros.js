//----------------imports---------------------
const mongoose = require("mongoose");

//----------------schema-------------------------
const macrosSchema = new mongoose.Schema({
    food: { type: String },
    calories: { type: Number },
    protein: { type: Number },
    carbs: { type: Number },
    fat: { type: Number },
    date: { type: Date, default: Date.now }, // Tracks when the food was added
  });

//-----------------model-------------------------

const Macros = mongoose.model('Macros', macrosSchema);


//-----------------exports------------------------

module.exports = Macros