import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departments, setDepartments] = useState([]);

  const handleAddDepartment = () => {
    if (departmentName.trim() !== "") {
      setDepartments([...departments, departmentName]);
      setDepartmentName("");
    }
  };

  return (
    <Box display="flex"flexDirection="column" alignItems="left" p={3}>
      <Box bgcolor="white" boxShadow={3} p={2}>
        <Typography variant="h5" gutterBottom>Department</Typography>
        <Typography variant="subtitle1">Create a new department for halls</Typography>
        <TextField 
        className="departmentttt"
          label="Department Name"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <Box mt={3} className='department-button'>
          <Button variant="contained"  onClick={handleAddDepartment} fullWidth>
            Add Department
          </Button>
        </Box>
      </Box>
      <Box width="100%" mt={3}>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Department Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map((department, index) => (
                <TableRow key={index}>
                  <TableCell>{department}</TableCell>
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
      </Box>
    </Box>
  );
};

export default AddDepartment;