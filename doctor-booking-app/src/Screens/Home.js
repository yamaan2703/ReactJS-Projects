import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AppBtn from '../Components/AppBtn';

function Home() {
  return (
    <>
      <AppNavbar />
      <div className="">
        <div className='container mx-auto px-4 mt-16'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="logo text-3xl font-bold mb-4">
              FIND & BOOK YOUR APPOINTMENT WITH YOUR FAV DOCTORS
            </h1>
            <p className="text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="w-[200px]">
              <AppBtn label="Explore" />
            </div>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthcare"
              className="rounded-lg"
              />
          </div>
        </div>
              </div>
      </div>
    </>
  );
}

export default Home;
