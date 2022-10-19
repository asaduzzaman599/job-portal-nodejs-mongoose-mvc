const managerService  = require("../services/manager.service");
const jobService  = require("../services/job.service");
const userService  = require("../services/user.service");

exports.createManager = async (req, res, next) => {
    try {
      console.log('manager')
      const result = await userService.createUserService({...req.body,role:'manager'});
  
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
        const query = {}

        if(_id){
          query.data = {_id}
        }
      const result = await userService.findOneUserService({...query});
        
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
      const result = await userService.findManyUserService({role:'manager'});
        
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
  
exports.findManagersAllJob = async (req, res, next) => {
    try {
      const {_id} = req.user
      const query = {}
      if(_id){
        query.data = {"manager.id":_id}
      }

      const result = await jobService.findAllJobService((query));
        
      res.status(200).json({
        status: "success",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't find manager's job"
      })
    }
  }
  
exports.findManagersOneJob = async (req, res, next) => {
    try {

      const {id:_id} = req.params
      const query = {}
      
      const user = req.user
      if(_id && user){
        query.data = {_id}
        //query.data = {'manager.id': user._id}
        console.log('job data',query)
      }
      query.populate = 'candidates'
      const result = await jobService.findOneJobService(query);
        
      res.status(200).json({
        status: "success",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't find manager's job"
      })
    }
  }

  