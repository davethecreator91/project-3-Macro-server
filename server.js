//-------------------imports---------------------
const express =  require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const macroModel  = ("./models/macros.js");

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });




//--------------routes---------------------
















//------------------listener--------------------
  app.listen(3001, () => {
    console.log('The express app is ready!');
  });