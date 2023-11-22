const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(


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
        classRoll: {
            type: Number,
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
        email: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        bailStatus: {
            january: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            february: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            march: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            april: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            may: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            june: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            july: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            august: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            september: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            october: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            november: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
            december: {
                type: String,
                enum: ["Paid", "Due"],
                default: "Due"
            },
        },

        section: {
            type: String,
            required: true,
        },
        bloodGroup: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
