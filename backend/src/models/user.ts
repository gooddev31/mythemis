const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    company: {
        type:String,
        required: false
    },
    registerDate: {
        type: Date,
        default: new Date()
    },
    subscribe: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model("User", userSchema);