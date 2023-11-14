const mongoose = require("mongoose");

const appliedStudentSchema = new mongoose.Schema(


    {
        studentName: {
            type: String,
            required: true,

        },
        fatherName: {
            type: String,
            required: true,
        },
        motherName: {
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

        studentClass: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        fatherPhone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: [
                "pending",
                "success"
            ],
            default: "pending"
        },

        bloodGroup: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("appliedStudent", appliedStudentSchema);
