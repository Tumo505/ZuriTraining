const express = require('express')
const app = express()

const port = process.env.PORT || 5000

// connection string
const connectionString = "mongodb://localhost:27017/bookShop"

// mongo client
const MongoClient = require('mongodb').MongoClient

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())


app.get('/books', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({message: err});
        const db = connectedClient.db()
        db.collection("books").find({}).toArray((err, result) => {
            if (err) {
                return res.status(500).json({message: err})
            }
            return res.status(200).json({books: result})
        })
    })
})


app.post('/books', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) {
            return res.status(500).json({message: err})
        } 
        const db = connectedClient.db();
        db.collection('books').insertOne({
            author: req.body.author,
            title: req.body.title
        }, (err, result) => {
            if (err) return res.status(500).json({message: err})
            return res.status(200).json({message: "new book added"})
        })
    }) 
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))