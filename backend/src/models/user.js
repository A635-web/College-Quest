const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require("uuid");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 32,
      trim: true,
      required: true,
    },
    profileImage: {
      type: String,
      trim: true,
    },
    dateOfBirth: {
      type: String,
      trim: true,
      // required: true
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      // required: true
    },
    email: {
      type: String,
      unique: [true, "Email already registered."],
      required: true,
      trim: true,
    },
    countryCode: {
      type: String,
      maxlength: 5,
      default: null,
      required: true,
    },
    phoneNumber: {
      type: Number,
      maxlength: 15,
      unique: [true, "Phone Number already registered."],
      default: null,
      required: true,
    },
    encrypted_password: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      // required:true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    tenthMarks: {
      type: String,
    },
    twelthMarks: {
      type: String,
    },
    address: {
      type: String,
    },
    salt: {
      type: String,
    },
    role: {
      type: String,
      default: "student",
      enum: ["student", "coordinator", "admin"],
      trim: true,
    },
    registeredEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
    clubs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Club",
      },
    ],
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encrypted_password = this.securePassword(password);
  })

  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (password) {
    return this.securePassword(password) === this.encrypted_password;
  },

  securePassword: function (password) {
    if (!password) return "";

    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  const changedTimeStamp = parseInt(this.updatedAt.getTime() / 1000, 10);
  return changedTimeStamp > JWTTimeStamp;
};

module.exports = mongoose.model("User", userSchema);
