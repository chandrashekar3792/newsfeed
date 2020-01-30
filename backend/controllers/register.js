
let {buildResponse} = require('../utils/utils')
let {registerUser}=require("../utils/aws_cognito")


/**
		 * @api {post} /api/v1/register 1.Register User
		 * @apiVersion 1.0.0
		 * @apiGroup Newsfeed
		 * @apiParamExample {json} Input
		 *  {
	"email":"chandrashekar998@gmail.com",
	"mobile":"7899032001",
	"password":"Chandru@1992"
}
		 * @apiSuccessExample {json} Success
		 *    HTTP/1.1 200 OK
		 *{
    "status": true,
    "message": "Verify Token Sent",
    "data": {
        "username": "chandrashekar998@gmail.com"
    }
}
		 * @apiErrorExample {json} Error
		 *    HTTP/1.1 500 Internal Server Error
		 * {
    "status": true,
    "message": "Error in logging in",
    "error": {
        "code": "UsernameExistsException",
        "name": "UsernameExistsException",
        "message": "An account with the given email already exists."
    }
}
*/

module.exports.register = async(event)=>{
    try {
        let body = JSON.parse(event.body);
        if(!body.hasOwnProperty('email'))
            return buildResponse(400,{}, 'email is mandatory' );
        if(!body.hasOwnProperty('mobile'))
            return buildResponse(400,{}, 'Mobile Number is mandatory');
        if(!body.hasOwnProperty('password'))  
            return buildResponse(400,{}, 'password is mandatory' );
         let result=await registerUser(body);
         return buildResponse(200, result, 'Verify Token Sent')
    } catch (error) {
       return buildResponse(500, error, 'Error in logging in', 'error')
    }
}


// let checkForUserAndRegister = async(registerJSON)=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
//         let db = mongoose.connection;
//         let dbResponse  = await User.findOne({'username':registerJSON.username, 'email':registerJSON.email}).exec();
        
//         if(!dbResponse){
//             let user  = new User(registerJSON)
//             await user.save();
//             db.close();
//             return buildResponse(200, registerJSON, 'Successfully Registered', 'data')
//         }
//         return buildResponse(409,{}, 'User already present', 'data')
//     } catch (error) {
//         throw error;
//     }
// }

