import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
function Signup(){
    const[SignupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange=(e)=>{
        const{name, value} = e.target;
        console.log(name,value);
        const copySignupInfo = {...SignupInfo};
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }
    console.log("SignupInfo", SignupInfo);

    const handleSignup= async(e)=>{
        e.preventDefault();
        const{name, email, password}=SignupInfo;
        if (!name || !email || !password) {
            toast.error("Please fill all fields");
            return;
        }
        try{
            const url="http://localhost:8080/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(SignupInfo)
                
            });
            const result = await response.json();
            const{success, message, error} = result;
            if(success){
                toast.success(message);
                setTimeout(() => {
                    window.location.href="https://zerodha-versity.netlify.app/";
                },1000);
            }else if(error){
                toast.error(error);
                
            }else if(!success){
                toast.error("Something went wrong");
            }
        }catch(error){
            console.log(error);
        }

        
    }



    return(
        <div className='container SignupPage mb-5 mt-5' >
            <h1 >Sign Up</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        onChange={handleChange}
                        type="text"  name="name" placeholder='Enter your name..' autoFocus value={SignupInfo.name} autoComplete='name'>
                    </input>

                </div>
                <div>
                    <label htmlFor="email"> Email :</label>
                    <input 
                        onChange={handleChange}
                        type="email" name="email" placeholder=' Enter your email...' value={SignupInfo.email} autoComplete='email'>
                    </input>

                </div>
                    <div>
                    <label htmlFor="password"> Password : </label>
                    <input 
                        onChange={handleChange}
                        type="password" name="password" placeholder=' Enter your password...' value={SignupInfo.password} autoComplete='new-password'>
                    </input>

                </div>
                <button type='submit'>Signup</button>
                <span>Already Have an Account?
                    <Link to="/Login">Login</Link>
                </span>

            </form>
            <ToastContainer/>
        </div>
    );
}
export default Signup;