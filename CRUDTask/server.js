const express = require("express");
const mongoose = require("mongoose");
const peopleRouter = require("./routes/peopleRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Tumo505:TumoZuriTraining@tutoringappcluster.ejhkk.mongodb.net/CRUDAssignment?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(peopleRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});