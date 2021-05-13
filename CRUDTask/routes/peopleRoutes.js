const express = require("express");
const peopleModel = require("../models/people");
const app = express();


// POST req
app.post("/people", async (request, response) => {
  const people = new peopleModel(request.body);
  try {
    await people.save();
    response.send(people);
  } catch (error) {
    response.status(500).send(error);
  }
});


// GET req
app.get("/people", async (request, response) => {
  const people = await peopleModel.find({});

  try {
    response.send(people);
  } catch (error) {
    response.status(500).send(error);
  }
});

// GET single person by id
app.get("/people/:id", async (request, response) => {
  try {
      const people = await peopleModel.findById(request.params.id, request.body).exec();
      response.send(people);
  } catch (error) {
      response.status(500).send(error);
  }
});

//   UPDATE
app.patch("/people/:id", async (request, response) => {
    try {
      await peopleModel.findByIdAndUpdate(request.params.id, request.body);
      await peopleModel.save();
      response.send(people);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  

//   DELETE req
app.delete("/people/:id", async (request, response) => {
    try {
      const people = await peopleModel.findByIdAndDelete(request.params.id);
  
      if (!people) response.status(404).send("No person found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });
  
  // ...

module.exports = app;