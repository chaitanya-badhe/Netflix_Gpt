import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null); // clear errors when switching
  };

  const handleButtonClick = () => {
    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    // validate
    const message = checkValidData(emailVal, passwordVal);
    setErrorMessage(message);
    if (message) return;

    // SIGN UP
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User Signed Up:", user);
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } 
    // SIGN IN
    else {
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User Signed In:", user);
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div>
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IT-en-20260622-TRIFECTA-perspective_a505e142-5d98-4a85-9a68-71a35502b4c1_medium.jpg"
          alt="LoginPageBackImage"
        />
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 m-2 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Full Name (only for signup) */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg py-2 m-2 w-full bg-gray-700 text-white px-2"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="rounded-lg py-2 m-2 w-full bg-gray-700 text-white px-2"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="rounded-lg p-2 m-2 w-full bg-gray-700 text-white px-2"
        />

        <p className="text-red-500 text-sm px-2">{errorMessage}</p>

        <button
          type="button"
          className="py-4 m-2 bg-red-700 w-full rounded-lg text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-4 m-2 cursor-pointer text-white"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;