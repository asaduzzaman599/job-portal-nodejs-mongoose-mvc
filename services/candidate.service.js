const { query } = require("express");
const Candidate = require("../models/Candidate");

exports.createCandidatetService = async (data) => {
    const candidate = await Candidate.create(data);
   

    return candidate;
  };

exports.findAllCandidatetService = async (query) => {
    const candidate = await Candidate.find({...query?.data}).populate('appliedInfo');
   

    return candidate;
  };
  exports.findOneCandidatetService = async (query) => {
    const candidate = await Candidate.findOne({...query?.data});
   

    return candidate;
  };