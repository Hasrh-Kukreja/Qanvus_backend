const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String, // You may want to use String for phone numbers to handle various formats.
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // You may also want to add a validation for a valid email format.
  },
  dateOfBirth: {
    type: String, // Store date of birth as a Date object.
    required: true,
  },
  profileImage: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    // For added security, you should hash and salt the password before saving it.
  },
  tokens: [
    {
      token: {
        type: String,
        required: false,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
