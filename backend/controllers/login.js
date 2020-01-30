let {buildResponse} = require('../utils/utils')
let {loginToCognito}=require("../utils/aws_cognito")
/**
		 * @api {post} /api/v1/login 3.Login User
		 * @apiVersion 1.0.0
		 * @apiGroup Newsfeed
		 * @apiParamExample {json} Input
		 * {
	"email":"chandrashekar998@gmail.com",
	"password":"Chandru@1992"
}
		 * @apiSuccessExample {json} Success
		 *    HTTP/1.1 200 OK
		 *{
    "status": true,
    "message": "Successfully Logged In",
    "data": {
        "token": "eyJraWQiOiI5ZDRRb1Mzc0NNUncxXC9HZjU5T2p2WT....",
        "email": "chandrashekar998@gmail.com"
    }
}
		 * @apiErrorExample {json} Error
		 *    HTTP/1.1 500 Internal Server Error
		 * {
    "status": true,
    "message": "Error in logging in",
    "error": "Incorrect username or password."
}
*/
module.exports.login = async(event)=>{
    try {
        let body = JSON.parse(event.body);
        if(!body.hasOwnProperty('email'))
            return buildResponse(400,{}, 'Email is mandatory', 'data' );
        if(!body.hasOwnProperty('password'))
            return buildResponse(400,{}, 'password is mandatory', 'data' );
         let token=await loginToCognito(body.email,body.password);
         return buildResponse(200,{token,email:body.email},"Successfully Logged In")
    } catch (error) {
        console.log("error",error);
       return buildResponse(500, error, 'Error in logging in', 'error')
    }
}