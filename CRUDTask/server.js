const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const peopleRouter = require("./routes/peopleRoutes.js");

const PORT = process.env;
const { MONGO_URI } = process.env;

const app = express();

app.use(express.json());

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const port = process.env.PORT || 5000

app.use(peopleRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});