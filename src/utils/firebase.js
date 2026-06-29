// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3sm8a3_2YDeYM3O5MkLctiJsZy-OPKFw",
  authDomain: "netflixgpt-1c8e2.firebaseapp.com",
  projectId: "netflixgpt-1c8e2",
  storageBucket: "netflixgpt-1c8e2.firebasestorage.app",
  messagingSenderId: "249878815910",
  appId: "1:249878815910:web:74f882abea85ddc3078067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();