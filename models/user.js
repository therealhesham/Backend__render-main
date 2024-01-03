const mongoose = require("mongoose");
// const client = require ("../config/connection")

mongoose.connect("mongodb+srv://lvw:LVW123456789@cluster0.9bdwe65.mongodb.net/landingpage?retryWrites=true&w=majority&ssl=true")
const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    strict: false,
  }
);

const user = mongoose.model("user", userSchema);
module.exports = user;