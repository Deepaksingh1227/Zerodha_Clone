import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
function Login(){
    const[LoginInfo, setLoginInfo] = useState({   
        email: "",
        password: ""
    });

    const handleChange=(e)=>{
        const{name, value} = e.target;
        console.log(name,value);
        const copyLoginInfo = {...LoginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }
    console.log("LoginInfo", LoginInfo);

    const handleLogin= async(e)=>{
        e.preventDefault();
        const{email, password}=LoginInfo;
        if (!email || !password) {
            toast.error("Please fill all fields");
            return;
        }
        try{
            const url="http://localhost:8080/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(LoginInfo)
                
            });
            const result = await response.json();
            
            

            const{success, message, jwtToken, name, error} = result;
            if(success){
                toast.success(message);
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("name", name);    
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
            <form onSubmit={handleLogin}>             
                <div>
                    <label htmlFor="email"> Email :</label>
                    <input 
                        onChange={handleChange}
                        type="email" name="email" placeholder=' Enter your email...' value={LoginInfo.email} autoComplete='email'>
                    </input>

                </div>
                    <div>
                    <label htmlFor="password"> Password : </label>
                    <input 
                        onChange={handleChange}
                        type="password" name="password" placeholder=' Enter your password...' value={LoginInfo.password} autoComplete='current-password'>
                    </input>

                </div>
                <button type='submit'>Login</button>
                <span>Does't Have an Account?
                    <Link to="/Signup">Signup</Link>
                </span>

            </form>
            <ToastContainer/>
        </div>
    );
}
export default Login;