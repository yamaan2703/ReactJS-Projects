import React, { useState } from 'react';
import AppModal from '../Components/AppModal';
import AppBtn from '../Components/AppBtn';

function Details() {
  const [modal, setModal] = useState(false);
  
  const OpenModal = () => {
    setModal(true);
  };

  return (
    <>
      <div className='details_section mt-32'>
        <div className='container p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-sky-300'>
            <div className='p-3'>
              <img src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='rounded-lg'
              />
            </div>
            <div className=''>
              <h1>Dr John Desis</h1>
              <p>Profession: <span>Dentist</span></p>
              <p>Year of Experience: <span>30 Years</span></p>
              <p>About the Doctor: <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p>

              <div className='mt-10'>
                <AppBtn label="Show Modal" onClick={OpenModal}/>
                {modal && <AppModal />}
              </div>
            </div>     
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
