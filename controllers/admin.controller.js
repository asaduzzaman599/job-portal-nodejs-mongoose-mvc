const userService  = require("../services/user.service");

exports.makeAdmin = async (req, res, next) => {
    try {
        const {id:_id} = req.params 
        if(!_id){
            return res.status(400).json({
                status: "failed",
                error: "Please provide Identity Number!"
              })
        }

        const user = await userService.findOneUserService({_id})
        if(!user){
            return res.status(400).json({
                status: "failed",
                error: "No user found!"
              })
        }
        if(user.role === "manager"){
            return res.status(400).json({
                status: "failed",
                error: "Already role is manager!"
              })
        }

         const result = await userService.updateUserService(_id,{role:'manager'});
      
         if(result.modifiedCount){
            return res.status(200).json({
                status: "success",
                error: "User role changed to manager"
              })
         }
      } catch (error) {
        console.log(error)
        res.status(400).json({
          status: "failed",
          error: "Couldn't create the user"
        })
      }
}
