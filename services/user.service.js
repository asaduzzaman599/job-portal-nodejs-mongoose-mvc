const User = require("../models/User");

exports.createUserService = async (data) => {
    const userData = await User.create(data);
    const {password, ...user} = userData.toObject();
    return user;
  };

  exports.findOneUserService = async (data) => {
    const user = await User
                      .findOne({...data})
                      .select({password:0});   

    return user.toObject();
  };
  exports.userLoginService = async (data) => {
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
