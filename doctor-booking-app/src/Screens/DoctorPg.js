import React, { useState } from 'react'
import AppCard from '../Components/AppCard';

function DoctorPg() {
    const [activeSection, setActiveSection] = useState("all");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
    <div className='doctor_page mt-28'>
        <div className='container p-12'>
            <div className='flex justify-center items-center space-x-5'>
            <p onClick={() => handleSectionClick("all")}>All</p>
            <p onClick={() => handleSectionClick("dentist")}>Dentist</p>
            <p onClick={() => handleSectionClick("cardiologist")}>Cardiologist</p>
            <p onClick={() => handleSectionClick("orthopedic")}>Orthopedic</p>
            <p onClick={() => handleSectionClick("neurologist")}>Neurologist</p>
            <p onClick={() => handleSectionClick("otology")}>Otology</p>
            <p onClick={() => handleSectionClick("generalDoctor")}>General Doctor</p>
            </div>

            <div>
                {activeSection === "all" && (
                    <div>
                        <div>
                            <AppCard 
                             title="Dentist"
                             name="Dr John Desis"
                             experience="12 Years"
                             address="This is an example card description. You can customize it as needed."
                             imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    </>
  )
}

export default DoctorPg