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

    const seatingCapacityOptions = [
      { label: '0-150' },
      { label: '100-500' },
      { label: '500-1000' },
      { label: '1000-2000' },
    ];
    const Input = styled(MuiInput)`
    width: 42px;
  `;
    
  const AddBanquet = ({ hall, handleChange}) => {
      const [selectedCapacity, setSelectedCapacity] = useState('');
      const [selectedArea, setSelectedArea] = useState(0);
      const [hallname, sethallName]= useState('');
      const [banquets, setBanquets] = useState([]);
  
    const handleCapacityChange = (event, newCapacity) => {
      setSelectedCapacity(newCapacity);
    };
    const [value, setValue] = React.useState(30);
  
    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
      setSelectedArea(newValue);
    };
  
    const handleInputChange = (event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlur = () => {
      if (value < 0) {
        setValue(0);
      } else if (value > 100) {
        setValue(100);
      }
    };
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#FAF8FF',
        color: '#00000',
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
      
    }));
    
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }
    
    
    const handleAddBanquet = () => {
      if (hallname.trim() !== "") {
        const newBanquet = {
          hall_title: hallname,
          hall_type: hall,
          area: selectedArea,
          capacity_space: selectedCapacity,
        };
        setBanquets([...banquets, newBanquet]);
        sethallName("");
        setSelectedCapacity("");
        setSelectedArea(0);
      }
    };
    
    return (
      <React.Fragment>
        <h3 className="">Add banquet hall</h3>
        <p style={{ color: '#7C7F82', marginBottom: '30px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </p>
        <Grid container rowSpacing={2} columnSpacing={5}>
          <Grid item xs={12} md={6}>
            <div className="app-form-field">
              <TextField
                required
                label="Hall Name"
                variant="outlined"
                placeholder="Enter Company Name"
                value={hallname}
                onChange={(event) => sethallName(event.target.value)} 
              />
            </div>
          </Grid>
      
          <Grid item xs={12} md={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Halltype</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={hall}
                  label="Select Halltype"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <TextField
          label="Selected Capacity"
          value={selectedCapacity}
          onChange={(event) => setSelectedCapacity(event.target.value)}
          fullWidth
        />
          <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <ToggleButtonGroup
              value={selectedCapacity}
              exclusive
              onChange={handleCapacityChange}
              aria-label="seating capacity options"
              fullWidth
            >
              {seatingCapacityOptions.map((option) => (
                <ToggleButton key={option.label} value={option.label}>
                  {option.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </FormControl>
        </Box>
     
        </Grid> 
        <Grid item xs={12} md={6}>
        <Box sx={{ width: 350 }}>
        <Typography id="input-slider" gutterBottom>
          Select area
        </Typography>
        <Grid container spacing={2} alignItems="center">
          
          <Grid item xs>
            <Slider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              min={0}
                max={1500}
            />
          </Grid>
          <Grid item>
            {/* <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 1500,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            /> */}
          </Grid>
          <Box sx={{ mt: 2, border: '1px solid #ccc', padding: '4px 8px', borderRadius: '4px' }}>
          <Typography variant="body1">
            {selectedArea} Sq Ft
          </Typography>
        </Box>
        </Grid>
      </Box>
   
      </Grid>
      <Grid item xs={12} md={6}>
            
            <Box mt={2}>
            <Button  className='addbanquet'variant="contained"  onClick={handleAddBanquet} fullWidth>
              Add Banquet
            </Button>
          </Box>
           
          </Grid> 
        </Grid> 
        <div className="tables_div">
             
              <TableContainer>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Banquet Name</TableCell>
                      <TableCell>Hall Type</TableCell>
                      <TableCell>Area</TableCell>
                      <TableCell>Capacity Space</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {banquets.map((hall, index) => (
                      <TableRow key={index}>
                        <TableCell>{hall.hall_title}</TableCell>
        <TableCell>{hall.hall_type}</TableCell>
        <TableCell>{hall.area}</TableCell>
        <TableCell>{hall.capacity_space}</TableCell>
        <TableCell>
                      <Button variant="outlined" color="primary">
                        Edit
                      </Button>
                    </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
      </React.Fragment>
    );
                    };
 

export default AddBanquet;