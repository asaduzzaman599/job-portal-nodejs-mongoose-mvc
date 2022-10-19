const Job = require("../models/Job");
const AppliedInfo = require("../models/AppliedInfo");
const Candidate = require("../models/Candidate");

exports.createJobService = async (data) => {
    const result = await Job.create(data);
    return result;
  }

exports.appliedJobInfoService = async (data) => {
    const result = await AppliedInfo.create({...data});

    console.log(data)
    const {_id:appliedInfoId,job,candidate}= result;
  
    console.log('job can',job,candidate)
  
     const jobdata = await Job.updateOne(
      {_id:job},
      {
        $inc:{totalApplied:1}, $push : {appliedInfo: {id:appliedInfoId, candidateId:candidate},
      }, $push:{candidates:candidate},}
      )
      
      console.log('job data',jobdata)
     const candidateData = await Candidate.updateOne(
      {_id:candidate},
      {$push : {appliedInfo: appliedInfoId,
      jobs:job}}
      )
      
      console.log('candidate data',candidateData)
    return result;
  }
  
exports.findAllJobService = async (query) => {
    const result = await Job.find({...query?.data}).sort(query?.sort).limit(query?.limit).populate('candidates');
    return result;
  }

  
exports.findOneJobService = async (query) => {
  console.log("data",query?.data)
    const result = await Job.findOne({ ...query?.data }).populate('candidates')
    return result;
  }
  
  exports.updateJobService = async (_id, data) => {
    const result = await Job.updateOne({ _id }, data, {
      runValidators: true
    });
    return result;
  }

  
  
exports.findOneAppliedJobInfoService = async (query) => {
    const result = await AppliedInfo.findOne({ ...query?.data })
    return result;
  }
