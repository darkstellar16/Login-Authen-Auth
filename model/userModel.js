const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
})

const loginInfo = mongoose.model("Login", loginSchema);

module.exports = loginInfo;