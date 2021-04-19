const app = require('express')();
// connection string
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/newdb'
const { Schema } = mongoose;

// function to connect to the database
mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log({ err })
    } else {
        console.log("Database connected!!!")
    }
})


// database schema
const friendsSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    netWorth: Number,
    isCool: Boolean,
    cars: Array,
    status: {
        account: String,
        cashAtHand: Number,
        hasPiggyVest: Boolean
    },
    relationshipHistory: {
        name: String,
        startDate: Date,
        isActive: Boolean
    }
});

const Friend = mongoose.model('Friend', friendsSchema);

//fetch all friends
app.get('/friends', (req, res) => {
    Friend.find({}, (err, friends) => {
        if (err) {
            return res.staus(500).json({ err })
        } else {
            return res.status(200).json({ friends })
        }
    })
});


Friend.findOne({ name: "Tumo", age: 22 }, (err, friends) => {
    if (err) console.log(err)
    else
        console.log({ friends })
})

app.listen(5000, () => console.log("connected"))