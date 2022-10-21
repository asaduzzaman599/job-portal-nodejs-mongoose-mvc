const Job = require("../models/Job");
const AppliedInfo = require("../models/AppliedInfo");
const Candidate = require("../models/Candidate");

exports.createJobService = async (data) => {
    const result = await Job.create(data);
    return result;
  }

exports.appliedJobInfoService = async (data) => {
    const result = await AppliedInfo.create({...data});

    const {_id:appliedInfoId,job,candidate}= result;
  
     const jobdata = await Job.updateOne(
      {_id:job},
      {
        $inc:{totalApplied:1}, $push : {appliedInfo: {id:appliedInfoId, candidateId:candidate},
      }, $push:{candidates:candidate},}
      )
      
     const candidateData = await Candidate.updateOne(
      {_id:candidate},
      {$push : {appliedInfo: appliedInfoId,
      jobs:job}}
      )
      
    return result;
  }
  
exports.findAllJobService = async (query) => {
    const result = await Job.find({...query?.data})
                          .select({...query?.select})
                          .sort(query.sort)
                          .limit(query?.limit)
                          .populate(query.populate);
    return result;
  }

  
exports.findOneJobService = async (query) => {
    const result = await Job
                        .findOne({ ...query?.data })
                        .select({...query.select})
                        .populate(query.populate)
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
