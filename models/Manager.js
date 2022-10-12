const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const managerSchema = mongoose.Schema({

  jobs: [{
    type: ObjectId,
    ref: "Product"
  }],
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a manager name"],
    maxLength: 100,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"]
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, {
  timestamps: true
});

const Manager = mongoose.model("Manager", managerSchema);

module.exports = Manager;