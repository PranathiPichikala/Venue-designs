import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddDepartment from '../Layouts/AddDepartment';
import CreateUser from '../Layouts/CreateUser';
import StepperHeader from '../Layouts/StepperHeader';
import CreateRole from '../Layouts/CreateRole';
import AddCompany from '../Layouts/AddCompany';
import AddBanquet from '../Layouts/AddBanquet';
import FinishOnboard  from '../Layouts/FinishOnboard';
import "../Css/Company.css"

const AdditionalButton = () => {
      
    
  return (
      <div className='foot'>
      <h3>Having Trouble</h3>
      <p>Contact Us Lorem Ipsum is simply dummy</p>
    <Button className='contactus' sx={{ mt: 1 }}>
      Contact Us
    </Button>
    </div>
  );
};
export default function Company() {
    const [hall, setHall] = useState('');

  const handleChange = (event) => {
    setHall(event.target.value);
  };
  const steps = [
    {
      label: 'Add Company',
          para:'Lorem Ipsum is simply dummy text',
      description: (
          <AddCompany/>
        ),
  
    },
    {
      label: 'Add banquet hall',
      para:'Lorem Ipsum is simply dummy text',
      description: (
          <AddBanquet hall={hall} handleChange={handleChange} />
        ),
    },
    {
      label: 'Create Role',
      para:'Lorem Ipsum is simply dummy text',
      description: (
        <CreateRole/>
      ),
    },
    {
      label: 'Create designation',
      para:'Lorem Ipsum is simply dummy text',
      description: (
        <AddDepartment/>
      ),
    },
    {
      label: 'Add a user',
      para:'Lorem Ipsum is simply dummy text',
      description: (
        <CreateUser/>
      ),
    },
    {
      label: 'Finish',
      para:'Lorem Ipsum is simply dummy text',
      description:(
        <FinishOnboard/>
      ),
    },
  ];
    const [activeStep, setActiveStep] = useState(0);
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  

  
  return (
    
<React.Fragment>
    <StepperHeader/>
       <Box >
      <Grid container spacing={4}>
        <Grid item xs={3} className='leftcolor'>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
               
                <StepLabel
                  optional={
                    
                      <Typography variant="caption">{step.para}</Typography>
                   
                  }
                >
                  {step.label}
                </StepLabel>
              </Step>
              
            ))}
          </Stepper>
          <AdditionalButton/>
        </Grid>
        <Grid item xs={9} className='rightcolor'>
          <Box sx={{ p: 2 }}>
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                {activeStep === index && (
                  <React.Fragment>
                {step.label === 'Add banquet hall' && ( 
                      <AddBanquet hall={hall} handleChange={handleChange}
                      />
                      
                    )}
                    {step.label !== 'Add banquet hall' && step.description}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                      
                    {index !== 0 && (
        <Button  className='previous' disabled={index === 0} onClick={handleBack} sx={{ mt: 1, ml: 1 }}>
          Previous
        </Button>
                    )}
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        className='saveandproceed'
                        sx={{ mt: 1, ml: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Save and Proceed'}
                      </Button>
                    </Box>

                    
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
          </Box>
 
        </Grid>
      </Grid>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
      
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
    </React.Fragment>
 
  );
}
