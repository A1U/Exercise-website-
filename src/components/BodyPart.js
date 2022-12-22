import React from 'react'
import { Stack, Typography } from '@mui/material';
import img1 from '../assets/abc.png';
 import { borderTop } from '@mui/system';

{/* <source /> */}
const BodyPart = ({item,setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
     alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
     sx={{ 
     borderTop: bodyPart === item ?   '4px solid #ff2625':'', 
        
       backgroundColor: '#fff',
       borderButtonleftRadius: '20px',
       width: '270px',
       height: '280px',
       cursor: 'pointer',
     gap: '47px' }}
     onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
       > 
    <img src={img1} alt="dumbell" style={{width:'100px', 
    height:'100px'}}/>
      <Typography fontSize="24px" fontWeat="bold" color="#3A1212"
       textTransform="capitalize">{item}</Typography>
   </Stack>
   )
 }

export default BodyPart;
