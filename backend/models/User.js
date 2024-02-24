const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "required name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "required email"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "required password"],
  },
  joiningTime: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


const User = mongoose.model("TaskUser", userSchema);
module.exports = User;