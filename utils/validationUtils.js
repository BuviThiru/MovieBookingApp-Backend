const {userStatus,userTypes} = require('./constants')

exports.isValidEmailID= (email)=>{
    return String(email).toLocaleLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

exports.isValidUserType = (userTypeSent) =>{
    const types = Object.values(userTypes)
    if(!types.includes(userTypeSent)){
        throw new Error(`value for field 'userType' is not valid. Possible values are ${types}`)
    }
}

exports.isValidUserStatus = (userStatusSent)=>{
    const status = Object.values(userStatus);
    if(!status.includes(userStatusSent)){
        throw new Error(`value for field 'userStatus' is not valid. Possible values are ${status}`);
    }
}