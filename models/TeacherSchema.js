const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(


    {
        name: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        image:
        {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: true,
        },

        age: {
            type: Number,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        education: {
            type: String,
            required: true,
        },
        idNumber: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
