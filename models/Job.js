const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({

    manager: {
        name: {
          type: String,
          trim: true,
          required: true,
        },
        id: {
          type: ObjectId,
          required: true,
          ref:"Manager"
        }
      },
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a brnad name"],
    maxLength: 100,
    unique: true,
    lowercase: true,
  },
  description: String,
  remuneration: {
    type: Number,
    required: true,
    min: [0, "Remuneration can't be negative"]
  },
  totalApplied: {
    type: Number,
    required: true,
    min: [0, "Total applied job can't be negative"]
  },
 
  candidates: [{
    name: String,
    contanctNumber: String,
    id: {
      type: ObjectId,
      ref: "Candidate"
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

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;