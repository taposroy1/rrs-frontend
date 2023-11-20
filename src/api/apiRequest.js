import axios from "axios";
import unauthorized from "../utils/unauthorized.js";

let BASEURL="http://localhost:5000";

export  async function UserLoginRequest(email) {
    try {

        let URL=BASEURL+'/api/v1/UserLogin/'+email;
        let result=await axios.get(URL);
        let data=result.data

        return data;
    }
    catch (e) {
        return false
    }
}

export  async function VerifyLoginRequest(email,code) {
    try {

        let URL=BASEURL+'/api/v1/VerifyLogin/'+email+"/"+code;
        let result=await axios.get(URL);
        let data=result.data

        return data;
    }
    catch (e) {
        return false
    }
}