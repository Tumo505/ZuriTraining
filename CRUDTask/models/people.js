const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema({
  name: String,
  email: String,
  country: String
});

const People = mongoose.model("People", PeopleSchema);

module.exports = People;