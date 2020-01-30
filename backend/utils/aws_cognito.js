const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
global.fetch = require('node-fetch');

const poolData = {    
    UserPoolId : process.env.AWS_COGNITO_POLL_ID, // Your user pool id here    
    ClientId : process.env.AWS_COGNITO_CLIENT_ID // Your client id here
}; 
const pool_region = process.AWS_REGION;
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const registerUser=(request)=>new Promise((resolve,reject)=>{
    try{
        var attributeList = [];
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:request.email}));
        attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:"+91"+request.mobile}));

        return userPool.signUp(request.email, request.password, attributeList, null, function(err, result){
            if (err) {
                console.log("err1",err);
                reject(err);
            }
            let cognitoUser = result.user;
            let username=cognitoUser.getUsername()
            console.log("username",username);
            resolve({username:username});
        });
    }catch(err){
        console.log("err",err);
        throw err;
    }
});

const verifyUserToken=(username,token)=>new Promise((resolve,reject)=>{
    try{
        var userData = {
            Username: username,
            Pool: userPool,
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        // return await cognitoUser.confirmRegistration(token, true);
        cognitoUser.confirmRegistration(token, true, function(err, result) {
            if (err) {
                // alert(err.message || JSON.stringify(err));
                reject(err);
            }
            resolve(result);
        });
    }catch(err){
        throw err;
    }
})


async function loginToCognito(username,password){
    try{
        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
            authenticationData
        );
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username: username,
            Pool: userPool,
        };
        return await authenticate(userData,authenticationDetails);
    }catch(err){
        throw err;
    }
}

const authenticate=(userData,authenticationDetails)=>new Promise((resolve,reject)=>{
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            var accessToken = result.getAccessToken().getJwtToken();
            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
           resolve(accessToken);
        },
        onFailure: function(err) {
            reject(err.message || JSON.stringify(err));
        },
    });
});

module.exports={
    registerUser,
    verifyUserToken,
    loginToCognito
}