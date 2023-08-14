import React from 'react';
import { Grid, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <div>
    <div className='bg-white '>
    <Grid container spacing={2} className='footer'>

        <Grid  className='dec'item xs={12} sm={12} md={6} lg={3}>
            <img src="Images/LOGO.png" />
        </Grid>


        <Grid item xs={12} sm={6} md={6} lg={2} className='dec'>

            <ul>
                <li>
                    <h5>Features</h5>
                </li>
                <li>
                <a href='#'> How it works</a>
                </li>
                <li>
                <a href='#'> For Teams</a>
                </li>
                <li>
                <a href='#'> Pricing</a>
                </li>
            </ul>
        </Grid>


        <Grid item xs={12} sm={6} md={6} lg={2} className='dec'>

            <ul>
                <li>
                    <h5>Resources</h5>
                </li>
                <li>
                    <a href='#'>Integrations</a>
                </li>
                <li>
                <a href='#'>  Developer API</a>
                </li>
                <li>
                <a href='#'>  Help Center</a>
                </li>
                <li>
                <a href='#'>   Channel partners</a>
                </li>
            </ul>
        </Grid>


        <Grid item xs={12} sm={6} md={6} lg={2} className='dec'>

            <ul>
                <li>
                    <h5>Company</h5>
                </li>
                <li>
                <a href='#'> About Us</a>
                </li>
                <li>
                <a href='#'> Careers</a>
                </li>
                <li>
                <a href='#'> Inspirations Hub</a>
                </li>
                <li>
                <a href='#'>Press</a>
                </li>
            </ul>
        </Grid>
    </Grid>
</div>
<div className='bg-col'>
<div className="footer-container">
      <Typography variant="body1" className="footer-text">
        2023 venuemanagement. All Rights Reserved
      </Typography>
      <div className="social-media-icons">
      <a href='#'>  <img src="Images/facebook.png"/></a>
       <a href='#'><img src="Images/instagram.png"/></a> 
        <a href='#'><img src="Images/linkedin.png"/></a>
        <a href='#'><img src="Images/twitter.png"/></a>
      </div>
    </div>
</div>
</div>
  )
}

export default Footer;