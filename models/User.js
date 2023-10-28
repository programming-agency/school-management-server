const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    schoolName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

    paymentID: String



});

module.exports = mongoose.model("User", userSchema);