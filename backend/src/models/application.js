const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    club: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
    reason: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
