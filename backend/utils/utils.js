
let buildResponse = async(statusCode, result, message, dataKey = "data")=>{
    return {
        'statusCode':statusCode,
        'body':JSON.stringify({status: true, message : message, [dataKey] : result}),
        'headers': {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials":"true",
            "Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
        }
    }
}




module.exports ={
    buildResponse
}