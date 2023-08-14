import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';

const StepperHeader = () => {
  return (
    <Box
 className='stepper-header'
    >
      <div className='stepper-logo'>
      <img  src="Images/LOGO.png"alt="Logo" style={{ height: '100%', objectFit: 'contain' }} />
      </div>
    </Box>
  );
};


export default StepperHeader;