const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const {userTypes, userStatus} = require('../utils/constants');
const jwt = require('jsonwebtoken');
require("dotenv").config()

const signupSer = async(userData) => {
    try{
        
        if(userData.userType === "customer" || !userData.userType) { userData.userStatus= userStatus.approved}
        const userObj = {
            name: userData.name,
            email: userData.email,
            username: userData.username,
            password: bcrypt.hashSync(userData.password, 8),
            userType: userData.userType,
            userStatus: userData.userStatus,
        }

        const user = await User.create(userObj);
        return user;

    }catch(err){
        return {
            error: err.message
        }
    }
}

const signinSer = async(userData) => {
    try{
        const user = await User.findOne({email: userData.email});
        // to check if user exists
        if(!user){
            throw new Error("user doesn't exist!");
        }

        // to check if user's status is approved
        if(user.userStatus != userStatus.approved){
            throw new Error(`user is not allowed to login, as user is in status: [ ${user.userStatus} ]`);
        }

        // to check user's password
        const isValidPassword= bcrypt.compareSync(userData.password, user.password);
        if(!isValidPassword){
            throw new Error("Invalid password");
        }

        const accessToken = jwt.sign({ userId: user._id, email: user.email }, process.env.secretKey);
        const response = {
            name: user.name,
            email: user.email,
            username: user.username,
            userType: user.userType,
            userStatus: user.userStatus,
            token: accessToken
        }
        return response;
    }catch(err){
        return {
            error: err.message
        }
    }
}
const updateUserPasswordSer = async(currentUser,userId,data)=>{
    try{ 
        const user = await User.findOne({_id: userId});
 
        if(currentUser.userType != userTypes.admin && currentUser._id != user._id){
            throw new Error(`current user with the userType: ${currentUser.userType} is not allowed to change the information of other users`);
        }
        if(!data.oldPassword){
            throw new Error("Old password is not provided");
        }
        else if(data.oldPassword == data.newPassword){
            throw new Error("Old password and new password are expected to be different");
        }

        const isValidPassword= bcrypt.compareSync(data.oldPassword, user.password);
        if(!isValidPassword){
            throw new Error("Invalid old password");
        }else{
            user.password = bcrypt.hashSync(data.newPassword, 8);
            const updatedUser = await User.findByIdAndUpdate({_id: userId}, user, {new: true});
            return updatedUser;
        }
    }catch(err){
        return {
            error: err.message
        }
    }
}
const getAllUsersSer= async()=>{
    try{
        const users = await User.find();
        return users

    }catch(err){
        return {
            error: err.message
        }
    }

}
const updateUserSer= async(currentUser, userId, data)=>{
    try{
        const user = await User.findOne({_id: userId});
      
        if(!user){
            throw new Error("user doesn't exist!");
        }

        if(currentUser.userType != userTypes.admin && currentUser._id != user._id){
            throw new Error(`current user with the userType: ${currentUser.userType} is not allowed to change the information of other users`);
        }

        if(data.userType && data.userType!= user.userType && currentUser.userType != userTypes.admin){
            throw new Error(`current user with the userType: ${currentUser.userType} is not allowed to change the userType`);
        } 
        
        
        if(data.userStatus && data.userStatus!= user.userStatus && currentUser.userType != userTypes.admin){
            throw new Error(`current user with the userType: ${currentUser.userType} is not allowed to change the userStatus`);
        }  

        user.name = data.name || user.name;
        user.email = data.email || user.email;
        user.username = data.username || user.username;
        user.userStatus = data.userStatus || user.userStatus;
        user.userType = data.userType || user.userType;

        const updatedUser = await User.findByIdAndUpdate({_id: userId}, user, {new: true});
        return updatedUser;

    }catch(err){
        return {
            error: err.message
        }
    }
}

module.exports = {signupSer, signinSer,updateUserSer,getAllUsersSer,updateUserPasswordSer}