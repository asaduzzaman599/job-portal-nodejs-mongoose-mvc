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
  
      const query = {}
      const {id:_id} = req.params
      if(_id){
        query.data = {_id}
      }

      const result = await candidateService.findAllCandidatetService(query);
  
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
  