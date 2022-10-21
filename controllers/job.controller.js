const candidatetService  = require("../services/candidate.service");
const JobService  = require("../services/job.service");
const candidateService  = require("../services/candidate.service");
const {ObjectId } = require('mongodb')

exports.findAllJob = async (req, res, next) => {
    try{
      const user = req.user
      const query = {}
      if(req.query.sort){
        query.sort = req.query.sort.split(',').join(' ')
        delete req.query.sort
      }
      
      let queryString = JSON.stringify(req.query)
      queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

      query.data = {...req.query, ...JSON.parse(queryString)}
      query.select = {
        candidates:0,
        appliedInfo:0,
        manager:0,
      }
        
        const result= await JobService.findAllJobService(query)
        return res.status(200).json({
            status: "success",
            result: result
          })

    } catch (error) {
      res.status(400).json({
        status: "failed",
        error: "Couldn't load all job"
      })
    }
}

exports.findOneJob = async (req, res, next) => {
    try{
        const {id:_id} = req.params
        const query={}
        query.data = {_id}
        query.select = {
          candidates:0,
          appliedInfo:0
        }
        query.populate = 'manager'
        const result = await JobService.findOneJobService(query)
        return res.status(200).json({
            status: "success",
            result: result
          })

    } catch (error) {
      res.status(400).json({
        status: "failed",
        error: "Couldn't find a job"
      })
    }
}

exports.createJob = async (req, res, next) => {
    try {
      const deadline = new Date(new Date()
                          .setDate(
                            (new Date().getDate() + Math.round
                            (Math.random() * 10)) % 30
                            ))

      if(req.user){
        req.body.manager = req.user._id
      }
      const result = await JobService
                            .createJobService({
                              ...req.body,
                              deadline:req.body.deadline
                              ?req.body.deadline
                              :deadline
                            });
      
      res.status(200).json({
        status: "success",
        message: "Successfully created the job",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "failed",
        error: "Couldn't create the job"
      })
    }
  }

  
exports.updateJob = async (req, res, next) => {
    const { id:_id } = req.params;
    try {
      const result = await JobService.updateJobService(_id, req.body);
      if (!result.modifiedCount) {
        return res.status(400).json({
          status: "failed",
          error: "Couldn't update the job with this id",
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "Successfully updated the job",
        result:result
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "failed",
        error: "Couldn't update the job",
      });
    }
  };

  
exports.applyJob = async (req, res, next) => {
  try {
    
    const {_id} = req.user
    const candidate = await candidateService
                          .findOneCandidatetService({
                                                      data:{
                                                        'user.id':_id
                                                         }
                                                    })
    const query = {}
    const jobId =  req.params.id
    const candidateId  = candidate._id

    const queryJob = {}
    queryJob.data = {_id: jobId}
    const jobData = await JobService.findOneJobService(queryJob)

     if(!jobData){
      return res.status(400).json({
        status: "failed",
        error: "no job exist to apply"
      })
     }

    if(jobData?.deadline < new Date()){
      return res.status(400).json({
        status: "failed",
        error: "Deadline not exist to applied the job"
      })
    }

    const queryAppliedJob={}
    queryAppliedJob.data = ({'candidate':candidateId,'job':jobId})
    const appliedJobInfoExist =await JobService.findOneAppliedJobInfoService(queryAppliedJob)

    if(appliedJobInfoExist){
      return res.status(400).json({
        status: "failed",
        error: "Already Applied"
      })
    }

    const {resumeId} = req.body
      const result =  await JobService.appliedJobInfoService({
                                                              resumeId,
                                                              candidate:candidateId.toString(),
                                                              job: req.params.id.toString() 
                                                            });
  
      res.status(200).json({
        status: "success",
        message: "Successfully created the job",
        result: result
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "failed",
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
      query.select = {
        candidates:0,
        appliedInfo:0,
        manager:0,
      }
      const result = await JobService.findAllJobService(query)
      return res.status(200).json({
          status: "success",
          result: result
        })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: "failed",
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
      query.select = {
        candidates:0,
        appliedInfo:0,
        manager:0,
      }
      const result = await JobService.findAllJobService(query)
      return res.status(200).json({
          status: "success",
          result: result
        })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: "failed",
      error: "Couldn't find all job"
    })
  }
}