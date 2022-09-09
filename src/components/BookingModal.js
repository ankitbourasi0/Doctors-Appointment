import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import PhoneAuthentication from './PhoneAuthentication';
import { Images } from '../assets/index'
const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 8,
  display: 'flex',

  [theme.breakpoints.down('md')]: {

    width: '85%',
    display: 'flex',
    p: 4,
    flexDirection: 'column',


  },
});

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className='bg-blue-500 
      hover:bg-blue-600
      shadow-lg
      shadow-blue-500/80
      hover:shadow-blue-500/60
      transition-all
      ease-in-out
      hover:text-sm
      text-white px-5 py-2 text-md rounded-md'>Appointment</button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        componentsProps={{ backdrop: Backdrop, }}
      >
        <Fade in={open}>
          <Box sx={style}>

            <PhoneAuthentication />
            <div id="otpBoxImage" className='md:w-1/2 md:block hidden  justify-center items-center' >
              <img src={Images.otpImage} alt='otp' className='md:w-96 md:h-96 ' />
            </div>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
