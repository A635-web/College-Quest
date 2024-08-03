const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
    coordinator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
    },
    clubName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],
    studentsApplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }, ],
    coverImage: {
        type: String,
    },
    mainImage: {
        type: String,
    },
    acceptingStudents: {
        type: Boolean,
        default: false,
    },
    upcomingEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
    }, ],
    perks: [{
        type: String,
    }, ],
    achievements: [{
        type: String,
    }, ],
}, { timestamps: true });

module.exports = mongoose.model("Club", clubSchema);