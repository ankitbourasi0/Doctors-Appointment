import  React,{useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhoneAuthentication from './PhoneAuthentication';
import {Images} from '../assets/index'
const style =(theme)=>( {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  borderRadius:4,
  boxShadow: 24,
  p: 8,
  display:'flex',
  
  [theme.breakpoints.down('md')]: {

    width:'85%',
    display:'flex',
    p: 4,
    flexDirection:'column',


  },
});

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className=' mt-2 bg-blue-600 text-white rounded-lg md:px-6 md:py-3 px-4 py-2 w-full text-md md:font-semibold hover:bg-blue-700 '   >Appointment</button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

           <PhoneAuthentication/>
           <div id="otpBoxImage" className='md:w-1/2 md:block hidden  justify-center items-center' >
            <img src={Images.otpImage} alt='otp' className='md:w-96 md:h-96 '/>
            </div> 
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
