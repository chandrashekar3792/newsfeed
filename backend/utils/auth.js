'use strict';

const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
let request = require('async-request')
const iss = `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_COGNITO_POLL_ID}/`;
const generatePolicy = (principalId, effect, resource) => {
  const authResponse = {};
  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    const statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};

module.exports.authorize = async(event, context) => {
  try{
    if (event.authorizationToken) {
      const token = event.authorizationToken;
      let data=await validateToken(token)
      return(null, generatePolicy(data.sub, 'Allow', event.methodArn)); 
    } else {
      context.fail("Unauthorized");
      return;
    }
  }catch(err){
    console.log("err",err);
    context.fail("Unauthorized");
  }
};

async function validateToken(token) {
  let result=await request(`${iss}/.well-known/jwks.json`)
  let body=JSON.parse(result.body);
  let pems = {};
  var keys = body['keys'];
  for(var i = 0; i < keys.length; i++) {
      //Convert each key to PEM
      var key_id = keys[i].kid;
      var modulus = keys[i].n;
      var exponent = keys[i].e;
      var key_type = keys[i].kty;
      var jwk = { kty: key_type, n: modulus, e: exponent};
      var pem = jwkToPem(jwk);
      pems[key_id] = pem;
  }//validate the token
  var decodedJwt = jwt.decode(token, {complete: true});
  if (!decodedJwt) {
      console.log("Not a valid JWT token");
      return;
  }

  var kid = decodedJwt.header.kid;
  var pem = pems[kid];
  if (!pem) {
      console.log('Invalid token');
      return;
  }

  let payload=await jwt.verify(token, pem)
  return payload;
}