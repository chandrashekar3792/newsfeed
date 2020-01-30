let {buildResponse} = require('../utils/utils')
let {loginToCognito}=require("../utils/aws_cognito")
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