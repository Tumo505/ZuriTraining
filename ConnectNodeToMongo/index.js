const express = require('express')
const app = express()

const port = process.env.PORT || 5000

// connection string
const connectionString = "mongodb://localhost:27017"

// mongo client
const MongoClient = require('mongodb').MongoClient

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect("bookshop", (err, connectedClient) => {
    if (err) throw err;
    const db = connectedClient.db("bookshop")
    db.collection("books").find({}).toArray((err, result) => {
        console.log(result)
    })
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))