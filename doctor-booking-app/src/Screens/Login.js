import React from "react";
import AppInp from "../Components/AppInp";
import AppBtn from "../Components/AppBtn";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="background">
        <div className="shadow flex justify-center items-center">
          <div className="w-[400px] bg-white p-5 rounded-lg">
            <div className="">
              <div>
                <h1 className="text-blue-500  font-bold text-5xl shadow-lg p-4 text-center shadow-blue-500 my-2">
                  Login
                </h1>
              </div>
              <div>
                <AppInp label="Enter Your Email" />
              </div>
              <div>
                <AppInp label="Enter Your Password" />
              </div>
              <div>
                <AppBtn label="Login" />
              </div>
              <div className="py-3 flex">
                <p className="text-lg">Create Your Account.</p>
                <Link
                  to="/signUp"
                  className="font-bold px-2 text-lg text-blue-500"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
