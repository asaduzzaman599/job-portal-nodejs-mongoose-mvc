const candidatetService  = require("../services/candidate.service");
const JobService  = require("../services/job.service");
const {ObjectId } = require('mongodb')

exports.findAllJob = async (req, res, next) => {
    try{
      const user = req.user

        const result = await JobService.findAllJobService()
        return res.status(200).json({
            status: "success",
            result: result
          })

    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't find all job"
      })
    }
}

exports.findOneJob = async (req, res, next) => {
    try{
        const {id:_id} = req.params
        const query={}
        query.data = {_id}
        
        const result = await JobService.findOneJobService(query)
        return res.status(200).json({
            status: "success",
            result: result
          })

    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't find a job"
      })
    }
}

exports.createJob = async (req, res, next) => {
    try {
      const deadline = new Date(new Date().setDate(new Date().getDate()+7))

      if(req.user){
        req.body.manager = {...req.user, id:req.user._id}
      }
      console.log(req.user)
      const result = await JobService.createJobService({...req.body,deadline:req.body.deadline?req.body.deadline:deadline});
      
      res.status(200).json({
        status: "success",
        message: "Successfully created the job",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't create the job"
      })
    }
  }

  
exports.updateJob = async (req, res, next) => {
    const { id:_id } = req.params;
    try {
      const result = await JobService.updateJobService(_id, req.body);
        console.log(result)
      if (!result.modifiedCount) {
        return res.status(400).json({
          status: "fail",
          error: "Couldn't update the job with this id",
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "Successfully updated the job"
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "fail",
        error: "Couldn't update the job",
      });
    }
  };

  
exports.applyJob = async (req, res, next) => {
  try {
    const query = {}
    const jobId = {id: req.params.id}
    const {candidateId } = req.body

    console.log()
    const queryJob = {jobId,candidateId}
    queryJob.data = {_id: jobId.id}
    const jobData = await JobService.findOneJobService(queryJob)

    if(!jobData.deadline > new Date()){
      return res.status(400).json({
        status: "fail",
        error: "Deadline not exist to applied the job"
      })
    }
    const queryAppliedJob={}
    queryAppliedJob.data = ({'candidate':candidateId,'job':jobId.id})
    const appliedJobInfoExist =await JobService.findOneAppliedJobInfoService(queryAppliedJob)
    console.log(appliedJobInfoExist)
    if(appliedJobInfoExist){
      return res.status(400).json({
        status: "fail",
        error: "Already Applied"
      })
    }
    console.log(candidateId,req.params.id)
    const {resumeId} = req.body
      const result =  await JobService.appliedJobInfoService({resumeId,candidate:candidateId.toString(),job: req.params.id.toString() });
  
      res.status(200).json({
        status: "success",
        message: "Successfully created the job",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't applied the job"
      })
    }
  }

  
exports.highestPaidJobs = async (req, res, next) => {
  try{
    const user = req.user

      const query = {}
      query.sort = {'salary':-1}
      query.limit=10;
      const result = await JobService.findAllJobService(query)
      return res.status(200).json({
          status: "success",
          result: result
        })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: "fail",
      error: "Couldn't find all job"
    })
  }
}
exports.highestAppliedJobs = async (req, res, next) => {
  try{
    const user = req.user

      const query = {}
      query.sort = {'totalApplied':-1}
      query.limit=5;
      const result = await JobService.findAllJobService(query)
      return res.status(200).json({
          status: "success",
          result: result
        })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: "fail",
      error: "Couldn't find all job"
    })
  }
}