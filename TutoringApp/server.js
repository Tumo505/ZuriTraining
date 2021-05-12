/**
* 1. creating an express server
* 2. Connect to mongodb
* 3. Initialise express
* 4. Initialise express middleware
* 5. Create a simple get request route(optional)
* 7. Listen to our app connection
*/ 

const express = require('express')
const connectDB = require('./db');


// Connect to db
connectDB();

// Initialise express
const app = express();

// Initialise Express middleware
app.use(express.json({ extended: false }));

// Create a basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to Tutoring App!" }))