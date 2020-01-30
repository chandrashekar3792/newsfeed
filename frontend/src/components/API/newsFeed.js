import axios from "axios";
import constants from "../../config/constants";
axios.defaults.baseURL = constants.apiUrl;

export const loginAPI = (email,password) => {
  try{
    const requestUrl = "login";
    return axios.post(requestUrl, {email,password});
    
  }catch(err){
    throw err;
  }
};

export const registerAPI=(email,mobile,password)=>{
  const requestUrl = "register";
  return axios.post(requestUrl, {email,mobile,password});
}

export const verifyUser=(email,token)=>{
  const requestUrl = "verifyUser";
  return axios.post(requestUrl, {email,token});
}
export const getFeeds=()=>{
  let token=localStorage.getItem("Authorization")
    return axios.get('feeds',{ headers: {Authorization: token}//the token is a variable which holds the token
  })
}