const JobService  = require("../services/job.service");


exports.findAllJob = async (req, res, next) => {
    try{
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
        
        const result = await JobService.findOneJobService(_id)
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
      const result = await JobService.createJobService(req.body);
  
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