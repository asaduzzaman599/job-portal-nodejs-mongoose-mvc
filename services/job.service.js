const Job = require("../models/Job");

exports.createJobService = async (data) => {
    const result = await Job.create(data);
    return result;
  }
  
exports.findAllJobService = async () => {
    const result = await Job.find();
    return result;
  }

  
exports.findOneJobService = async (_id) => {
    const result = await Job.findOne({ _id })
    return result;
  }
  
  exports.updateJobService = async (_id, data) => {
    const result = await Job.updateOne({ _id }, data, {
      runValidators: true
    });
    return result;
  }