const candidateService  = require("../services/candidate.service");


exports.createCandidate = async (req, res, next) => {
    try {
      // save or create
      
      const result = await candidateService.createCandidatetService(req.body);
  
      res.status(200).json({
        status: "success",
        messgae: "Data inserted successfully!",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: " Data is not inserted ",
        error: error.message,
      });
    }
  };

  exports.findAllCandidatetService = async (req, res, next) => {
    try {
  
      const result = await candidateService.findAllCandidatetService(req.body);
  
      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
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
  