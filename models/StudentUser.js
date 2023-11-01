const mongoose = require("mongoose");


const studentUsers = mongoose.Schema({

    studentName: {
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
    email: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },

    paymentID: String



});

module.exports = mongoose.model("NewStudent", studentUsers);