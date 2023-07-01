const {signup,signin,updateUser,updateUserPassword,getAllUsers } = require('../controller/user.controller')
const {validateSignInReq,validateSignupReq,verifyUpdatePasswordRequest,verifyUpdateUserInformationRequest} = require("../middlewares/validation.middlewares")
const {isAuthenticated, isAdmin, isUserStatusApproved} = require('../middlewares/auth.middleware');


module.exports = function(app){
 app.post('/mba/api/v1/users/signup',validateSignupReq, signup)
 app.post('/mba/api/v1/users/signin',validateSignInReq, signin)
    //update user's information
    app.put('/mba/api/v1/users/:id', [verifyUpdateUserInformationRequest, isAuthenticated, isUserStatusApproved], updateUser);

    //update user's password
    app.put('/mba/api/v1/users/:id/updatePassword', [verifyUpdatePasswordRequest, isAuthenticated, isUserStatusApproved], updateUserPassword);

     //get all users => only admin can use this api
     app.get('/mba/api/v1/users/', [isAuthenticated, isUserStatusApproved, isAdmin], getAllUsers);
}