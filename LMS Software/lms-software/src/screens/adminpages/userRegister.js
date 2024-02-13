import { useState } from "react";
import LMSBtn from "../../components/LMSBtn";
import LMSDropdown from "../../components/LMSDropdown";
import LMSInp from "../../components/LMSInp";
import { AppAdd } from "../../config/firebaseMethods";

export default function UserRegister() {
    const [userModel, setUserModel] = useState({
        userName: "",  // Fix the typo here (userNmae to userName)
        fatherName: "",
        contactNumber: "",
        otherPhoneNumber: "",
        userEmail: "",
        userPassword: "",
        cnicNumber: "",
        userAddress: "",
      });
    
      const SaveUserRegistration = () => {  // Fix the function name (SaveUserRegisteration to SaveUserRegistration)
        AppAdd("User Register", userModel)
          .then((res) => {
            setUserModel({
              userName: "",
              fatherName: "",
              contactNumber: "",
              otherPhoneNumber: "",
              userEmail: "",
              userPassword: "",
              cnicNumber: "",
              userAddress: "",
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const fillUserModel = (property, value) => {  // Fix the function name (fillUSerModel to fillUserModel)
        setUserModel((prevModel) => ({
          ...prevModel,
          [property]: value,
        }));
      };
    
      const options = [
        { label: "Admin", value: "option1" },
        { label: "Student", value: "option2" },
        { label: "Teacher", value: "option3" },
        { label: "Institute", value: "option4" },
      ];
    
      const handleSelect = (selectedValue) => {
        console.log("Selected Value:", selectedValue);
      };
    
  return (
    <>
      <div className="institute_form">
        <h1 className="text-3xl font-bold shadow-lg p-2 shadow-sky-900 text-center text-sky-900">
          Registeration Form
        </h1>
        <div className="p-5 shadow-2xl shadow-sky-900">
          <div className="grid grid-cols-2 grid-flow-row gap-4 py-5">
            <div className="">
              <LMSInp
              type="text"
              value={userModel.userName} 
              onChange={(e) => fillUserModel("userName", e.target.value)}
              label="Enter your Name" 
              />
            </div>

            <div className="">
              <LMSInp 
              label="Father Name"
              type="text"
              value={userModel.fatherName} 
              onChange={(e) => fillUserModel("fatherName", e.target.value)} 
              />
            </div>

            <div className="">
              <LMSInp 
              label="Contact Number" 
              type="Number"
              value={userModel.contactNumber} 
              onChange={(e) => fillUserModel("contactNumber", e.target.value)}
              />
            </div>

            <div className="">
              <LMSInp 
              label="Other Phone Number" 
              type="Number"
              value={userModel.otherPhoneNumber} 
              onChange={(e) => fillUserModel("otherPhoneNumber", e.target.value)}
              />
            </div>

            <div className="">
              <LMSInp 
              label="Enter Your Email" 
              type="Email"
              value={userModel.userEmail} 
              onChange={(e) => fillUserModel("userEmail", e.target.value)}
              />
            </div>

            <div className="">
              <LMSInp 
              label="Enter Password" 
              type="Password"
              value={userModel.userPassword} 
              onChange={(e) => fillUserModel("userPassword", e.target.value)}
              />
            </div>
            <div className="">
              <LMSInp 
              label="Enter CNIC Number" 
              type="Number"
              value={userModel.cnicNumber} 
              onChange={(e) => fillUserModel("cnicNumber", e.target.value)}
              />
            </div>
            <div className="">
              <LMSInp 
              label="Enter Your Address" 
              type="text"
              value={userModel.userAddress} 
              onChange={(e) => fillUserModel("userAddress", e.target.value)}
              />
            </div>
            <div className="mt-1">
              <LMSDropdown options={options} onSelect={handleSelect} />
            </div>
            <div className="">
              <LMSBtn label="Submit Form" onClick={SaveUserRegistration} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
