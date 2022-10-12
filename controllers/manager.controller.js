const managerService  = require("../services/manager.service");

exports.createManager = async (req, res, next) => {
    try {
      const result = await managerService.createManagertService(req.body);
  
      res.status(200).json({
        status: "success",
        message: "Successfully created the manager",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't create the manager"
      })
    }
  }

  
exports.findoneManager = async (req, res, next) => {
    try {
        const {id:_id} = req.params
      const result = await managerService.findOneManagerService(_id);
        
      res.status(200).json({
        status: "success",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't find the manager"
      })
    }
  }
  
  
  
exports.findAllManager = async (req, res, next) => {
    try {
      const result = await managerService.findAllManagerService();
        
      res.status(200).json({
        status: "success",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't find the manager"
      })
    }
  }