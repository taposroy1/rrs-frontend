import axios from "axios";
import unauthorized from "../utils/unauthorized.js";

let BASEURL="http://localhost:5000";
//let BASEURL="http://127.0.0.1:9229/";

export  async function UserRegistrationRequest(userType,email,firstName,lastName) {
    try {

        let URL=BASEURL+'/api/v1/UserRegistration/'+email;
        let reqBody = {"userType":userType,"firstName":firstName,"lastName":lastName};
        let result=await axios.post(URL, reqBody);
        let data=result.data
        return data;
    }
    catch (e) {
        return false
    }
}

export  async function VerifyRegistrationRequest(email,code,password) {
    try {

        let URL=BASEURL+'/api/v1/VerifyRegistration/'+email+"/"+code;
        let reqBody = {"password":password};
        let result=await axios.post(URL, reqBody);
        let data=result.data

        return data;
    }
    catch (e) {
        return false
    }
}

export  async function UserLoginRequest(userType,email,firstName,lastName) {
    try {

        let URL=BASEURL+'/api/v1/UserLogin/'+email;
        let reqBody = {userType,firstName,lastName};
        let result=await axios.get(URL, reqBody);
        let data=result.data
        return data;
    }
    catch (e) {
        return false
    }
}