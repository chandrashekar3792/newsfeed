
let {buildResponse} = require('../utils/utils')
let {registerUser}=require("../utils/aws_cognito")

module.exports.register = async(event)=>{
    try {
        let body = JSON.parse(event.body);
        if(!body.hasOwnProperty('email'))
            return buildResponse(400,{}, 'email is mandatory' );
        if(!body.hasOwnProperty('mobile'))
            return buildResponse(400,{}, 'Mobile Number is mandatory');
        if(!body.hasOwnProperty('password'))  
            return buildResponse(400,{}, 'password is mandatory' );
         await registerUser(body);
         return buildResponse(200, registerJSON, 'Verify Token Sent')
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

