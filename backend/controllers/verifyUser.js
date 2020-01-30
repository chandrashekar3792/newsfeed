
let {buildResponse} = require('../utils/utils')
let {verifyUserToken}=require("../utils/aws_cognito")

/**
		 * @api {post} /api/v1/verifyUser 2.Verify User
		 * @apiVersion 1.0.0
		 * @apiGroup Newsfeed
		 * @apiParamExample {json} Input
		 * {
	"email":"chandrashekar998@gmail.com",
	"token":"05800"
}
		 * @apiSuccessExample {json} Success
		 *    HTTP/1.1 200 OK
		 *{
    "status": true,
    "message": "Successfully Registered",
    "data": "SUCCESS"
}
		 * @apiErrorExample {json} Error
		 *    HTTP/1.1 500 Internal Server Error
		 * {
    "status": true,
    "message": "Error in logging in",
    "error": {
        "code": "ExpiredCodeException",
        "name": "ExpiredCodeException",
        "message": "Invalid code provided, please request a code again."
    }
}
*/
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
