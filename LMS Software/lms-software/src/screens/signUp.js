import { Link, useNavigate } from "react-router-dom";
import LMSBtn from "../components/LMSBtn";
import LMSInp from "../components/LMSInp";
import { useState } from "react";
import { AppSignUp } from "../config/firebaseMethods";

export default function SignUp() {
  const [model, setModel] = useState({ })

  const fillModel = (key, val) => {
    model[key] = val
    setModel({...model})
  }

  const navigate = useNavigate()

  let SignUpUser = () => {
    AppSignUp(model).then((res) => {
      navigate("/admin")
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
      <div className="bg-blue-500 h-screen flex justify-center items-center">
        <div className="w-[500px] bg-[rgba(255,255,255,.2)] p-10 rounded-lg"
        >
          <div className="my-5">
            <div>
              <h1 className="text-white font-bold text-5xl shadow-lg p-4 text-center shadow-white">
                SignUp
              </h1>
            </div>
            <div>
              <LMSInp 
              value={model.userName}
              onChange={(e) => fillModel("userName", e.target.value)}
              label="Enter Your Name" />
            </div>
            <div>
              <LMSInp
              value={model.email}
              onChange={(e) => fillModel("email", e.target.value)}
              label="Enter Your Email" />
            </div>
            <div>
              <LMSInp
              value={model.password}
              onChange={(e) => fillModel("password", e.target.value)}
              label="Enter Your Password" />
            </div>
            <div>
                <LMSBtn onClick={SignUpUser} label="SignUp"/>
            </div>
            <div className="py-5 flex text-white">
            <p className="text-gray-200 text-lg">If You have already Registered?</p>
            <Link to="/" className="font-bold px-2 text-lg">Login</Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
