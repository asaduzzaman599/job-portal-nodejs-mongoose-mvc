const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema({

    manager: {
        name: {
          type: String,
          trim: true,
          // required: true,
        },
        id: {
          type: ObjectId,
          // required: true,
          ref:"User"
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
  jobType:{
    enum:['Full Time', 'Part Time'],
    default:'Full Time',
    type:String
  },
  salary: {
    type: Number,
    required: true,
    min: [0, "Remuneration can't be negative"]
  },
  totalApplied: {
    type: Number,
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
    // name: String,
    // contanctNumber: String,
    
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