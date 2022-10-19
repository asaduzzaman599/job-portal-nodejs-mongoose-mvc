const User = require("../models/User");

exports.createUserService = async (data) => {
    const user = await User.create(data);
   
    return user;
  };

  exports.findOneUserService = async (data) => {
    console.log({data})
    const user = await User.findOne({...data}).select({password:0});   

    return user.toObject();
  };
  exports.userLoginService = async (data) => {
    console.log({data})
    const user = await User.findOne({...data});   

    return user;
  };

  
  exports.findManyUserService = async (data) => {
    const users = await User.find({...data});   

    return users;
  };

  exports.updateUserService = async (_id,data) =>  {  
  const user = await User.updateOne(
    {_id},
    {...data},
    {runValidators: true});
  return user;
}
