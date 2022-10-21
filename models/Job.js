const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({
    manager: {
          type: ObjectId,
          ref:"User"
      },
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a job title"],
    maxLength: 100,
    unique: true,
    lowercase: true,
  },
  experience:{
    type:String
  },
  location:{
    type:String,
    required: [true, "Please provide a job location"],
  },
  description: String,
  jobType:{
    enum:['full time', 'part time', 'intern', 'contractual'],
    default:'full time',
    type:String
  },
  salary: {
    type: Number,
    required: [true, "Please provide salary"],
    min: [0, "Remuneration can't be negative"]
  },
  totalApplied: {
    type: Number,
    default:0,
    min: [0, "Total applied job can't be negative"]
  },
  appliedInfo: [{
    candidateId:  {
      type: ObjectId,
      ref: "Candidate"
    },
    id: {
      type: ObjectId,
      ref: "AppliedInfo"
    }
  }],
  deadline:{
    type:Date,
    required:true
  },
  candidates: [{
      type: ObjectId,
      ref: "Candidate"
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