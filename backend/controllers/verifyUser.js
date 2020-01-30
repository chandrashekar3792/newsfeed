
let {buildResponse} = require('../utils/utils')
let {verifyUserToken}=require("../utils/aws_cognito")

module.exports.verifyUser = async(event)=>{
    try {
        let body = JSON.parse(event.body);
        if(!body.hasOwnProperty('email'))
            return buildResponse(400,{}, 'email is mandatory' );
        if(!body.hasOwnProperty('token'))
            return buildResponse(400,{}, 'OTP is mandatory' );
         result=await verifyUserToken(body.email,body.token);
         return buildResponse(200, result, 'Successfully Registered')
    } catch (error) {
        console.log("error",error);
       return buildResponse(500, error, 'Error in logging in', 'error')
    }
}
