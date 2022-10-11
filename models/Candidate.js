const mongoose = require("mongoose");
const valid = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const candidateSchema = mongoose.Schema({

  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a brnad name"],
    maxLength: 100,
    unique: true,
    lowercase: true,
  },
  resumeUrl: [{
    type: String,
    // required: true,
    validate: [valid.isURL, "wrong url"]
  }],
  jobs: [{
    name: String,
    contanctNumber: String,
    id: {
      type: ObjectId,
      ref: "Job"
    }
  }],
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, {
  timestamps: true
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;