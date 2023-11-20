import React, { useState } from 'react';
import { UserLoginRequest} from "../../api/apiRequest";
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import SubmitButton from "../SubmitButton";

const LoginTwo = () => {

    const [email,setEmail]=useState("");
    const [BtnLoader, SetBtnLoader] = useState(false);
    const navigate = useNavigate();
  
    const LoginEmail = async (e) => {
        e.preventDefault();
        if (email.length === 0) {
            toast.error("Email Required !");
        } else {
            SetBtnLoader(true)
            let res= await UserLoginRequest(email);
            SetBtnLoader(false)
           if(res['status']==="success"){
               toast.success(res['message']);
               navigate("/verify/"+email)
           }
           else{
               toast.error(res['message']);
           }
  
        }
    }
    return (
        <>
            <div className='flex justify-center'>
            <div className=' flex h-auto w-4/12 flex-col border shadow-lg p-10 mt-10'>
                <label htmlFor='firstName'>First Name</label>
                <input className='rounded h-10 border border-green-200 outline-none p-2 mb-5' type="text" text="First Name" name='firstName' />
                <label htmlFor='lastName'>Last Name</label>
                <input className='rounded h-10 border border-green-200 outline-none p-2 mb-5' type="text" text="Last Name" name='lastName' />
                <label htmlFor='email'>Email</label>
                <input value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                        className='rounded h-10 border border-green-200 outline-none p-2 mb-5' 
                        type="text" 
                        text="Email" 
                        name='email'
                        autoComplete='off' />
                <SubmitButton submit={BtnLoader} text="Next >" onClick={LoginEmail} className="p-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-lg mt-5" role="status" />
            </div>
        </div> 
        <Toaster position={"bottom-center"} />
        </>
        
    );
};

export default LoginTwo;