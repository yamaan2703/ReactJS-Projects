import React from 'react'
import AppBtn from "../Components/AppBtn"
import { IoClose } from "react-icons/io5";

function AppModal() {
  return (
    <>
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm pt-32 flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button className='place-self-end font-extrabold text-3xl'><IoClose /></button>
            <div className='bg-blue-500 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold'>Book a Time & Date with your Doctor</h1>
                <p className='text-md'>Lorem Ipsum is simply dummy text of the printing </p>
                <p>Lorem Ipsum is simply dummy text of the printing </p>
                <AppBtn label="Book Now"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AppModal