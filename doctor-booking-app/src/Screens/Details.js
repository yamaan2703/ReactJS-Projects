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
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-3'>
              <img src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                className='rounded-2xl shadow-2xl'
              />
            </div>
            <div className='p-5'>
              <h1 className='text-3xl font-bold'>Dr John Desis</h1>
              <p className='pt-2 text-blue-500 text-xl'><span className='text-black font-bold'>Profession: </span>Dentist</p>
              <p className='pb-2 text-blue-500 text-xl'> <span className='text-black font-bold'> Year of Experience:</span> 30 Years</p>
              <p className='pt-2 text-gray-500'> <span className='font-bold text-xl text-black'>About the Doctor: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

              <div className='mt-5'>
                <AppBtn label="Show Modal" onClick={OpenModal}/>
                {modal && <AppModal onClose={() => setModal(false)}/>}
              </div>
            </div>     
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
