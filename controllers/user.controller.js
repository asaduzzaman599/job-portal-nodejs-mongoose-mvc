const { createCandidatetService } = require("../services/candidate.service");
const userService  = require("../services/user.service");
const { generateToken } = require("../utils/token");
  
exports.signupUser = async (req, res, next) => {
    try {
        const result = await userService.createUserService(req.body);
      
      if(req.body.role === "candidate"){
        const user = req.body
        await createCandidatetService({
          name: `${user.firstName} ${user.lastName}` ,
          user:{
            id: result._id
          }
        })
      }
        res.status(200).json({
          status: "success",
          message: "Successfully sign up user",
          result: result
        })
      } catch (error) {
        console.log(error)
        res.status(400).json({
          status: "fail",
          error: "Couldn't create the user"
        })
      }
}

exports.loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body
        if(!email || !password ){
            return res.status(400).json({
                status: "fail",
                error: "Please provide valid Email and Password"
              })
        }
        const user = await userService.userLoginService({email});
    
        const {password:userPassword , ...data} = user.toObject()
        
        if(!user){
            return res.status(400).json({
                status: "fail",
                error: "No User Found"
              })
        }

        const isPasswordValid = user.comparePassword(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({
                status: "fail",
                error: "Wrong Email or Password!"
              })
        }

        const token = generateToken(data)

        res.status(200).json({
          status: "success",
          result: data,
          token
        })
      } catch (error) {
        console.log(error)
        res.status(400).json({
          status: "fail",
          error: "Couldn't login user"
        })
      }
}

exports.getAuth = async (req, res) => {
    try {
        const {email} = req.user
        console.log(email)
      const data = await userService.findOneUserService({email});
        const { password, ...user } = data.toObject()

      res.status(200).json({
        status: "success",
        result: user
    })
    } catch (error) {
        console.log(error)
      res.status(500).json({
        status: "fail",
        error,
      });
    }
  };