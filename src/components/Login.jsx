import Header from "./Header";
import React from "react";
import ReactDOM from "react-dom/client";
import {checkValidData} from '../utils/validate'
import { useState,useRef } from "react";


import { useState } from "react";

const Login =() =>{

    const [isSignInForm , setSignInForm] =  useState(true);
    const[errorMessage,setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);


    const toggleSignInForm =() => {
        setSignInForm(!isSignInForm);
    };


    const handleButtonClick=()=>{
        // validate the form data
        console.log(email.current.value);
        console.log(password.current.value);

        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);

    }


    return(
        <div>
        <Header/>
        <div className="absolute  inset-0 -z-10">
            <img className="w-full h-full object-cover"  src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IT-en-20260622-TRIFECTA-perspective_a505e142-5d98-4a85-9a68-71a35502b4c1_medium.jpg"  alt="LoginPageBackImage" />
        </div>


        
        <form  onSubmit={(e)=>e.preventDefault()}
        className=" rounded-lg w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0  bg-opacity-80" >
            <h1 className="font-bold text-3xl py-4 m-2 text-white" >{isSignInForm? "Sign In" :"Sign Up"}</h1>

            {!isSignInForm && (
            <input type="text" placeholder=" Full Name" className="  rounded-lg py-2 m-2 w-full bg-gray-700" />

            )

            }
            <input ref={email} type="text" placeholder=" Email Address" className="  rounded-lg py-2 m-2 w-full bg-gray-700" />
            <input   ref={password} type="password" placeholder="Password" className=" rounded-lg   p-2 m-2 w-full bg-gray-700"/>
            <p className="text-white">{errorMessage}</p>
            <button className="py-4 m-2 bg-red-700 w-full  rounded-lg" onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className="py-4 m-2  cursor-pointer text-white" onClick={toggleSignInForm}>{isSignInForm ? "Already registered? Sign In Now":"New to netflix? Sign Up Now"}</p>
        </form>
        </div>

    );
};


export default Login ;