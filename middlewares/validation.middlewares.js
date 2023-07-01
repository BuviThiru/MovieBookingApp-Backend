const { isValidEmailID, isValidUserType,isValidUserStatus } = require("../utils/validationUtils");

exports.validateSignupReq = (req, res, next) => {
  try {
    if (!req.body.name) {
      throw new Error("Value for the field 'name' is not provided");
    }
    if (!req.body.email) {
      throw new Error("Value for the field 'email' is not provided");
    }
    if (!req.body.username) {
      throw new Error("Value for the field 'username' is not provided");
    }
    if (!req.body.password) {
      throw new Error("Value for the field 'password' is not provided");
    }
    const validEmailId = isValidEmailID(req.body.email);
    if (!validEmailId) {
      throw new Error("value for the field 'email' is not valid");
    }

    req.body.userType && isValidUserType(req.body.userType);
    req.body.userStatus && isValidUserStatus(req.body.userStatus);

    next();
  } catch (error) {
    return res.status(400).send({
      Error: error.message,
    });
  }
};

exports.validateSignInReq = (req, res, next) => {
  try {
    if (!req.body.email) {
      throw new Error("value for field 'email' is not provided");
    }
    if (!req.body.password) {
      throw new Error("value for field 'password' is not provided");
    }
    const validEmail = isValidEmailID(req.body.email);
    if (!validEmail) {
      throw new Error("value for field 'email' is not valid");
    }
    next();
  } catch (err) {
    return res.status(400).send({
      Error: err.message,
    });
  }
};

exports.verifyUpdatePasswordRequest = (req, res, next) => {
  try {
    if (!req.body.oldPassword) {
      throw new Error('"oldPassword" is not provided');
    }
    if (!req.body.newPassword) {
      throw new Error('"newPassword" is not provided');
    }
    if (req.body.oldPassword == req.body.newPassword) {
      throw new Error(
        "Expected to give a different password.Old and new passwords cannot be same"
      );
    }
    next();
  } catch (error) {
    return res.status(400).send({
      Error: error.message,
    });
  }
};

exports.verifyUpdateUserInformationRequest = (req, res, next) => {
    try{

        if(req.body.email){
            const validEmail = isValidEmailID(req.body.email);
            if(!validEmail){
                throw new Error("value for field 'email' is not valid");
            }
        }

        req.body.userType && isValidUserType(req.body.userType);
        req.body.userStatus && isValidUserStatus(req.body.userStatus);
             
        next();
    }
    catch(err){
        return res.status(400).send({
            message: err.message
        })
    }
};
