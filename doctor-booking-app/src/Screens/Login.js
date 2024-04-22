import React from "react";
import AppInp from "../Components/AppInp";
import AppBtn from "../Components/AppBtn";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="first_pg h-screen ">
        <div className="overlay h-screen flex justify-center items-center">
          <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg">
            <div>
              <h1 className="text-4xl text-center font-serif font-bold shadow-md shadow-white py-2 text-white mb-3">
                Login
              </h1>
            </div>
            <div className="mt-6">
              <AppInp placeholder="Enter Your Email" />
            </div>
            <div className="mt-1">
              <AppInp placeholder="Enter Password" />
            </div>
            <div className="mt-3">
              <AppBtn label="Login" />
            </div>
            <div className="py-5 flex text-white">
            <p className="text-gray-200 text-lg">Create Your Account.</p>
            <Link to="/signUp" className="font-bold px-2 text-lg text-white">SignUp</Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
