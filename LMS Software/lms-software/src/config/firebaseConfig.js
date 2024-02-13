// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3UBfcGdueRwuaLLS4NYpiXY4nnu3P_l0",
  authDomain: "lms-software-71e80.firebaseapp.com",
  projectId: "lms-software-71e80",
  storageBucket: "lms-software-71e80.appspot.com",
  messagingSenderId: "102820242842",
  appId: "1:102820242842:web:bee391a5d88d6a62fd8623",
  measurementId: "G-2B958B355B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);