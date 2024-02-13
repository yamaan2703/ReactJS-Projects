import { useState } from "react";
import LMSBtn from "../../components/LMSBtn";
import LMSDropdown from "../../components/LMSDropdown";
import LMSInp from "../../components/LMSInp";
import { AppAdd } from "../../config/firebaseMethods";


export default function InstituteForm () {
    const [instituteModel, setInstituteModel] = useState({
        instituteName: "",
        instituteShortName: "",
        NoOfCampus: "",
        PersonalContactNumber: "",
        CampusContactNumber: "",
        MainCampusAddress: "",
        PersonalEmail: "",
        CampusEmail: "",
        instituteType : ""
    })

    const options = [
        { label: 'School', value: 'School' },
        { label: 'Collage', value: 'Collage' },
        { label: 'Universty', value: 'University' },
        { label: 'Institute', value: 'Institute' },
      ];
    
      
     const saveInstituteForm = () => {
        AppAdd("instituteForm", instituteModel)
        .then((res) => {
            setInstituteModel({
                instituteName: "",
                instituteShortName: "",
                NoOfCampus: "",
                PersonalContactNumber: "",
                CampusContactNumber: "",
                MainCampusAddress: "",
                PersonalEmail: "",
                CampusEmail: "",
                instituteType: "",
              });
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
     }

     const fillinstituteModel = (property, value) => {
           setInstituteModel((prevModel) => ({
            ...prevModel,
            [property]: value
        }))
    } 
    
    
    const handleSelect = (selectedValue) => {
        console.log('Selected Value:', selectedValue);
        // fillinstituteModel("instituteType", selectedValue.value);    




    };
     
    
    return (
        <>
        <div className="institute_form">
            <h1 className="text-3xl font-bold shadow-lg p-2 shadow-sky-900 text-center text-sky-900">Institute Form</h1>
         <div className="p-5 shadow-2xl shadow-sky-900">
         <div className="grid grid-cols-2 grid-flow-row gap-4 py-5">
            <div className="">
                <LMSInp
                 label="Institute Name"
                 type="text"
                 value={instituteModel.instituteName}
                 onChange={(e) => fillinstituteModel ("instituteName", e.target.value)}
                />
            </div>

            <div className="">
                <LMSInp 
                label="Institute Short Name"
                type="text"
                value={instituteModel.instituteShortName}
                onChange={(e) => fillinstituteModel ("instituteShortName", e.target.value)}
                />
            </div>

            <div className="">
                <LMSInp 
                label="No of Campus"
                type="Number"
                value={instituteModel.NoOfCampus}
                onChange={(e) => fillinstituteModel ("NoOfCampus", e.target.value)}
                />
            </div>

            <div className="">
                <LMSInp 
                label="Personal Contact Number"
                type="Number"
                value={instituteModel.PersonalContactNumber}
                onChange={(e) => fillinstituteModel ("PersonalContactNumber", e.target.value)}
                />
            </div>

            <div className="">
                <LMSInp 
                label="Campus Contact Number"
                type="Number"
                value={instituteModel.CampusContactNumber}
                onChange={(e) => fillinstituteModel ("CampusContactNumber", e.target.value)}
                />
            </div>

            <div className="">
                <LMSInp 
                label="Main Campus Address"
                type="text"
                value={instituteModel.MainCampusAddress}
                onChange={(e) => fillinstituteModel ("MainCampusAddress", e.target.value)}
                />
            </div>
            <div className="">
                <LMSInp 
                label="Personal Email"
                type="email"
                value={instituteModel.PersonalEmail}
                onChange={(e) => fillinstituteModel ("PersonalEmail", e.target.value)}
                />
            </div>
            <div className="">
                <LMSInp 
                label="Campus Email"
                type="email"
                value={instituteModel.CampusEmail}
                onChange={(e) => fillinstituteModel ("CampusEmail", e.target.value)}
                />
            </div>            
            <div className="mt-1">
                <LMSDropdown 
                options={options} 
                onSelect={handleSelect}  
                value={instituteModel.instituteType}
                onChange={(e) => fillinstituteModel ({instituteType: e.target.value})}
                />
            </div>
            <div className="">
                <LMSBtn label="Submit Form" onClick={saveInstituteForm}/>
            </div>
         </div>
         </div>
        </div>
        </>
    )
}
