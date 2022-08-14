import React from 'react'
import {Images} from '../assets/index'
import BookingModal from '../components/BookingModal'

const HomePage = () => {
  return (
    <div   className="bg-white flex justify-center items-center  w-full min-h-screen">
  
    
    <div   id="home" className=' md:p-16 p-6 m-4 flex md:flex-row flex-col md:space-y-0 space-y-4 bg-gray-100 rounded-md md:w-4/5 '  >
    <div className='flex  justify-center items-center md:w-1/2 w-full '>
      <div className='flex flex-col  space-y-4  '>
      <h1 className='text-2xl md:text-5xl font-semibold md:tracking-wide '>Here's The<span className='text-blue-700 font-bold'> Best Clinic</span> <br/>
      To Get Solutions.</h1>
      <p className='text-gray-600 font-semibold'>
        Health is the most important things for us therefore <br/>
        immediately check your health for you good.
      </p>
      <div className='w-2/4 '>

      <BookingModal/>
      </div>
      <div className='flex flex-col space-y-6 md:pt-8 '>
                <div className='inline-flex space-x-2 items-center'>
                <ion-icon name="call" className='text-teal-300 text-xl'></ion-icon>
                <span>+91-9589854745</span>
                </div>
                <div className='inline-flex space-x-2 items-center'>
                <ion-icon name="mail"></ion-icon>
                <span>ankitbourasi0@gmail.com</span>
                </div><div className='inline-flex space-x-2 items-center'>
                <ion-icon name="location"></ion-icon>
                <span>Medical Square</span>
                </div>
            </div>
      </div>
    </div>
    <div 
    className=' rounded-lg flex justify-center items-center  md:w-1/2 '>
      
      <img alt='doctorImage' className='rounded-lg md:w-96 ' src={Images.doctorImage}/>
      
    </div>

    </div>
    
  </div>
  )
}

export default HomePage