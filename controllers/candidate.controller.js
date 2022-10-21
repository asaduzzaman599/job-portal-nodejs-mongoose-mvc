const candidateService  = require("../services/candidate.service");
const fs  = require("fs");
const path = require('path');

exports.createCandidate = async (req, res, next) => {
    try {
      // save or create
      
      const result = await candidateService
                          .createCandidatetService(req.body);
  
      res.status(200).json({
        status: "success",
        messgae: "Data inserted successfully!",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        message: " Data is not inserted ",
        error: error.message,
      });
    }
  };

  
exports.getResume = async (req, res, next) => {
  try {
    // save or create
    const { resumeId } = req.params
    const file = path.join(process.cwd(),`./resume/${resumeId}`)
    var stat = fs.statSync(`./resume/${resumeId}`);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
    file.pipe(res);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};

  exports.findAllCandidatetService = async (req, res, next) => {
    try {
  
      const query = {}
      const {id:_id} = req.params
      query.select = {jobs:0}
      if(_id){
        query.data = {_id}
        query.select = {}
      }

      const result = await candidateService
                    .findAllCandidatetService(query);
  
      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        message: "fail to show candidate ",
        error: error.message,
      });
    }
  };


  
exports.fileUpload = async (req, res) => {
    try {
      res.status(200).json(req.files)
    } catch (error) {
  
    }
  }
  