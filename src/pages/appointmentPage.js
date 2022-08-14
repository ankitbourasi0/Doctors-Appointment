import React from 'react'
import AppointmentForm from '../components/AppointmentForm'

import './styles.css'
import AnimationCarousel from '../components/AnimationCarousel'
const AppointmentPage = () => {
  return (
    <div id="appointmentPage" className=' h-screen w-full flex justify-center items-center ' >
        <div  className='relative  flex md:flex-row flex-col bg-white md:space-y-0 space-y-2  rounded-md md:w-4/5  '>
          <div   className=' md:p-16  md:w-2/4 flex justify-center items-center'>
              
              <AnimationCarousel/>
          {/* <div id='caro' className='bg-indigo-600 left-0 bottom-0 absolute z-10 w-64 h-64'>
          </div> */}
          </div>
          <div id='AppointementSpace' className=' md:p-16 p-6 flex flex-row justify-center items-center md:w-2/4'>
            
            <AppointmentForm/>
            

          </div>
        </div>
    </div>
  )
}

export default AppointmentPage