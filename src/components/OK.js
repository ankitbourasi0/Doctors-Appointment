import React from 'react'
import AppointmentForm from './AppointmentForm'
import {Images} from '../assets/index'
const OK = () => {
  return (
    <div className='flex w-full min-h-screen justify-center items-center bg-gray-300' >
      <div className='flex flex-col justify-around md:flex-row md:space-x-6 md:space-y-0 space-y-6 sm:p-12 bg-purple-700 w-full  md:max-w-6xl p-8 rounded-xl shadow-lg text-white'>
         <div className='flex flex-col space-y-8 justify-between '>
            <div>
                <h1 className='font-bold text-4xl tracking-wide'>Book Appointment</h1>
            </div>
            <div className='md:w-96 md:h-96'>
                <img src={Images.appoint} alt='imag'/>
            </div>
            <div className='flex flex-col space-y-6'>
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
            <div className='flex  items-center'>
                <AppointmentForm/>
            </div>
        </div>
    </div>
  )
}

export default OK