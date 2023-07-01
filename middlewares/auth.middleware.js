const jwt = require("jsonwebtoken")
require("dotenv").config()
const User = require('../models/user.model')
const {userStatus,userTypes} = require('../utils/constants')

exports.isAuthenticated =(req,res,next)=>{
    const token = req.headers["x-access-token"];
    if(!token){
        return res.status(401).send({
            message: "No auth token provided"
        })
    }

    jwt.verify(token, process.env.secretKey, async(err, decoded) =>{
        if(err){
            return res.status(401).send({
                result: "Unauthorized!",
                message: err.message
            })
        }
        const user = await User.findOne({_id: decoded.userId});
        if(!user){
            return res.status(401).send({
                message: "Invalid user"
            })
        }
        req.user = user;
        next();
    });    
}
exports.isAdmin=(req,res,next)=>{
    if(req.user.userType != userTypes.admin){
        return res.status(403).send({
            message: "Admin role is required"
        })
    }
    next();

}
exports. isUserStatusApproved=(req,res,next)=>{
    if(req.user.userStatus != userStatus.approved){
        return res.status(403).send({
            message: `current user with the user status ${req.user.userStatus}, is unauthorized!`
        })
    }
    next();
}