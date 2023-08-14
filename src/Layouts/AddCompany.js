import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export const AddCompany = () => {
  return (
    <React.Fragment>
    <h3 className="">Add Company</h3>
    <p style={{color:'#7C7F82', marginBottom: "30px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
    <Grid container rowSpacing={2} columnSpacing={5}>
      <Grid item xs={12} md={6}>
        <div className="app-form-field">
          <TextField
            required
            label="Company Name"
            variant="outlined"
            placeholder="Enter Company Name"
          />
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className="app-form-field">
          <TextField
            label="GST (optional)"
            variant="outlined"
            placeholder="Enter GST"
            type="text"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="app-form-field">
          <TextField
            required
            label="State"
            variant="outlined"
            placeholder="Enter state"
            type="text"
          />
        </div>
      </Grid>
      
    
      <Grid item xs={12} md={6}>
        <div className="app-form-field">
          <TextField
            required
            label="City"
            variant="outlined"
            placeholder="Enter city"
            type="text"
          />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="app-form-field">
          <TextField
            required
            label="Address"
            variant="outlined"    
            placeholder="Enter Address"
            type="text"
          />
        </div>
    </Grid>
    </Grid>
  </React.Fragment>
  )
}

export default AddCompany;