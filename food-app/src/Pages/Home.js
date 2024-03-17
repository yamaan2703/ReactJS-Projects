import React from 'react'
import ImageSlider from '../Components/ImageSlider'
import About from './About'

function Home() {
  return (
    <>
    <div className='bg-[#0f1d22]'>
       <ImageSlider />
       <About />
    </div>
    </>
  )
}

export default Home