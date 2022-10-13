const jwt = require("jsonwebtoken");


exports.verifyToken = async  (req,res,next) =>{
    try{
        const { token } = req.body
        if(!token){
            return res.status(401).json({
                status: "fail",
                error: "You are not logged in"
                });
        }
        const decoded = jwt.verify(token,  process.env.TOKEN_SECRET);
        req.user = decoded
        
        next()
    }catch(error){
        res.status(401).json({
            status: "fail",
            error: "Invalid Token!"
            });
    }
}