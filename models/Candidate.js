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
  user:{
    id: {
      type: ObjectId,
      ref: "User"
    }
  },
  appliedInfo: [{
    
      type: ObjectId,
      ref: "AppliedInfo"
  }]
  ,
  
  jobs: [{
    
      type: ObjectId,
      ref: "Job"
    
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