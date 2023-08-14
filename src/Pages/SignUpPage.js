import React, { useState } from 'react';
import '../Css/LoginPage.css';
import StepperHeader from '../Layouts/StepperHeader';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from 'react-slick';

const theme = createTheme({
  typography: {
    fontFamily: 'Objectivity',
  },
});

const SignUpPage = ({ onClose } ) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prevPasswordVisible) => !prevPasswordVisible);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='root'>
        <StepperHeader />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={8} className='image'>
          <Slider {...settings} >
              <div>
                <img src="/Images/LoginImage.png" alt="Slide 1" />
              </div>
              <div>
                <img src="/Images/LoginImage.png" alt="Slide 2" />
              </div>
              <div>
                <img src="/Images/LoginImage.png" alt="Slide 3" />
              </div>
            </Slider>
            <div className='need-help-main'>
              <Grid container className='need-help'>
                <Grid item xs={6} md={8} className='needhelp-left'>
                  <h3>Need Help?</h3>
                  <p>Contact Us Lorem Ipsum is simply dummy</p>
                </Grid>
                <Grid item xs={6} md={4} className='contactttus'>
                  <button>Contact Us</button>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square className='paper'>
            <div>
              <Typography variant="h5" className='signup'>Sign Up</Typography>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Lorem Ipsum is simply dummy text of
              </Typography>
              <form className="form" noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Enter your username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  className=""
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Enter your email"
                  name="email"
                  autoComplete="email"
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="contact"
                  label="Enter your mobile number"
                  name="contact"
                  autoComplete="contact"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Create password"
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={passwordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  autoComplete="new-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                >
                  Sign Up
                </Button>
              </form>
              <Typography variant="body2" className='already-have' color="textSecondary" align="center" gutterBottom>
                Already have an account? <span className='loggedin'><Button onClick={onClose}>Log In</Button></span>
              </Typography>
              <Typography className='continue-with' variant="body2" color="textSecondary" align="center" gutterBottom>
                Or Continue with
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                className="google"
                startIcon={<img src="/Images/google.png" alt="Google" className="google-icon" />}
              >
                Continue with Google
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default SignUpPage;