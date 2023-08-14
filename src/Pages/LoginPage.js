import React, { useState } from 'react';
import '../Css/LoginPage.css';
import StepperHeader from '../Layouts/StepperHeader';
import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { withStyles } from "@material-ui/core/styles";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Objectivity',
  },
});

const CheckboxWithBlackCheck = withStyles({
    root: {
      "& .MuiSvgIcon-root": {
        color : "default",
        "&:hover": {
          backgroundColor: "white"
        }
      },
      "&$checked": {
        color:"yellow",
        "& .MuiIconButton-label": {
          position: "relative",
          zIndex: 0,
        },
        "& .MuiIconButton-label:after": {
          content: '""',
          left: 4,
          top: 4,
          height: 15,
          width: 15,
          position: "absolute",
          backgroundColor: "black",
          zIndex: -1,
          borderColor: "transparent"
        }
      }
    },
    checked: {}
  })(Checkbox);

const LoginPage = ( { onRegisterClick } ) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
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
              <Typography variant="h5" className='loginlogin'>Login</Typography>
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Lorem Ipsum is simply dummy text of
              </Typography>
              <form className="form" noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  className="custom-username-textfield"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  className="custom-textfield"
                />
                <div className="stay-signed-in-container">
                  <FormControlLabel
                    control={
                      <CheckboxWithBlackCheck
                        checked={state.checkedA}
                        onChange={handleChange("checkedA")}
                        value="checkedA"
                      />
                    }
                    label="Stay signed in"
                  />
                  <span className="forgot-username">
                    <Button>Forgot Username?</Button>
                  </span>
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="submit"
                >
                  Login
                </Button>
              </form>
              <Typography variant="body2" className='dont-have' color="textSecondary" align="center" gutterBottom>
                Don't have an account?<span className='registerr'><Button onClick={onRegisterClick}>Register</Button></span>
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

export default LoginPage;