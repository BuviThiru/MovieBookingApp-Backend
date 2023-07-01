const {signupSer,signinSer,updateUserSer,getAllUsersSer,updateUserPasswordSer} = require('../services/user.service');


exports.signup = async(req, res) =>{
    try{

        const response = await signupSer(req.body);
        if(response.error){ 
            return res.status(401).send({
                Error: response.error
            })
        }
        return res.status(201).send({
            Result: response
        })
    }catch(err){
        return res.status(500).send({
            Error: err
        })
    } 
}

exports. signin= async(req, res) =>{
    try{
    
        const response = await signinSer(req.body);
        if(response.error){
            return res.status(401).send({
                Error: response.error
            })
        }
        return res.status(201).send({
            Result: response
        })
    }catch(err){
        return res.status(500).send({
            Error: response.error
        })
    } 
}

exports.updateUser = async(req,res)=>{
    try {
        console.log("INCON>>>>>>>>>>>>>>>>>>>>",req.body)
        const response = await updateUserSer(req.user,req.params.id,req.body);
        if(response.error){
            return res.status(401).send({
                Error: response.error
            })
        }
        return res.status(200).send({
            result: response
        })
    } catch (error) {
        return res.status(500).send({
            Error: err
        })
    }
}


exports.getAllUsers = async(req, res)=>{
    try{
        const response = await getAllUsersSer();
        if(response.error){
            return res.status(401).send({
                error: response.error
            })
        }
        return res.status(200).send({
            result: response
        })
    }catch(err){
        return res.status(500).send({
            error: err
        })
    }  
}

exports.updateUserPassword = async(req, res)=>{
    try{
        const response = await updateUserPasswordSer(req.user, req.params.id, req.body);
        if(response.error){
            return res.status(401).send({
                error: response.error
            })
        }
        return res.status(200).send({
            result: response
        })
    }catch(err){
        return res.status(500).send({
            error: err
        })
    }  
}