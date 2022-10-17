const mongoose = require("mongoose");
const valid = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const appliedJobSchema = mongoose.Schema({
 
  candidate: {
    
      type: ObjectId,
      ref: "Candidate"
    
  },
  resumeId: {
    type: String,
    // required: true,
  },
  job: {
    
      type: ObjectId,
      ref: "Job"
    
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, {
  timestamps: true
});


const AppliedInfo = mongoose.model("AppliedInfo", appliedJobSchema);

module.exports = AppliedInfo;