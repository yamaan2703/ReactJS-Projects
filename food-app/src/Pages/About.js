import React from 'react'
import iconImage from "../images/iconImage.svg"
import Button from '../Components/Button'

function About() {
  return (
    <div className='about_section bg-[#0f1d22]'>
      <div className='container pt-40 pb-10'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='about_text text-white text-center p-3 w-full md:w-full lg:w-[500px] mx-0 md:mx-0 lg:mx-5'>
              <p className='text-lg md:text-lg lg:text-xl tracking-widest'>OUR STORY</p>
              <div className='flex justify-center py-1'>
              <img src={iconImage} className='w-[100px]'/>
              </div>
              <h1 style={{
              fontFamily: "Protest Riot, sans-serif",
              // fontWeight: 400,
              fontStyle: "normal",
            }} className='text-3xl md:text-3xl lg:text-6xl text-[#e4c590] py-2'>Every Flavor Tells a Story</h1>
              <p className='text-gray-400 italic py-2'>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into.</p>
              <p className='font-bold text-lg md:text-lg lg:text-xl py-2 tracking-widest'>Book Through Call.</p>
              <p className='text-xl md:text-xl lg:text-2xl text-[#e4c590] my-2'>+80 (400) 123 4567</p>
              <div className='my-4'>
                <Button label="READ MORE"/>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='about_img px-4 md:px-0 lg:px-4'>
              <img src='https://mediacity.co.in/delici/static/media/image-1.661483ecb5620eb91605.jpg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About