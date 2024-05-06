// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvSA9dDe0_OzdbkHmDuv-7AGPtBAqL4EE",
  authDomain: "doctor-booking-app-2cd18.firebaseapp.com",
  databaseURL: "https://doctor-booking-app-2cd18-default-rtdb.firebaseio.com",
  projectId: "doctor-booking-app-2cd18",
  storageBucket: "doctor-booking-app-2cd18.appspot.com",
  messagingSenderId: "296506845322",
  appId: "1:296506845322:web:2725bc87710086c86d6573",
  measurementId: "G-VFEL25THFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);