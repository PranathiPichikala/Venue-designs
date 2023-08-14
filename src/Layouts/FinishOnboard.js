import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import {
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Button } from '@mui/material';
const steps = [
    "Add company",
    "Add banquet hall",
    "Add department",
    "Create designation",
    "Add a user",
    "Finish onboarding",
  ];
export const FinishOnboard = () => {
    
    const [approved, setApproved] = useState(false);
    const [departmentList, setDepartmentList] = useState([]);
    const [roles, setRoles] = useState([]);
    const [banquets, setBanquets] = useState([]);
    const [users, setUsers] = useState([]);
  

    const header = [
        "Role",
        "Customers",
        "Banquet Hall",
        "Department",
        "Designation",
        "Hall Type",
      ];
      const rows = [
        "users",
        "banquethall",
        "department",
        "designation",
        "halltype",
      ];
  return (
        <div className="_0yet">
          <ToastContainer />

            <div className="_2sma">
              <div className="third-dox">
                <h2>Finish onboarding</h2>
                <p>Please verify the details of the company</p>
              </div>
              <div className="amelcorn-dors">
                <div className="box">
                  <span>Company Name</span>
                 
                </div>
                <div className="box">
                  <span>GST</span>
                  
                </div>
                <div className="box">
                  <span>Address</span>
                 
                </div>
                <div className="box">
                  <span>E-mail address</span>
                  
                </div>
                <div className="box">
                  <span>Phone number</span>
                  
                </div>
                <div className="box">
                  <span>Payment</span>
                  <span>Online</span>
                </div>
                <div className="box">
                  <span>Package taken</span>
                  
                </div>
                <div className="pinkies-alef"></div>
              </div>
            </div>
  
            <div className="tables_div">
              <div className="some_title">Banquets</div>
              <TableContainer>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Banquet Name</TableCell>
                      <TableCell>Hall Type</TableCell>
                      <TableCell>Area</TableCell>
                      <TableCell>Capacity Space</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {banquets.map((hall, index) => (
                      <TableRow key={index}>
                        <TableCell>{hall.hall_title}</TableCell>
                        <TableCell>{hall.hall_type}</TableCell>
                        <TableCell>{hall.area}</TableCell>
                        <TableCell>{hall.capacity_space}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="tables_div">
              <div className="some_title">User Details</div>
              <TableContainer>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Full Name</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Mobile No</TableCell>
                      <TableCell>Email ID</TableCell>
                      <TableCell>Email Verification</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>{user.full_name}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.phonenumber}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          {user.email_verification.status ? (
                            <span style={{ color: "green" }}>Verified</span>
                          ) : (
                            <span style={{ color: "red" }}>Pending</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="tables_div">
              <div className="some_title">Roles Details</div>
              <TableContainer>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {header.map((item, index) => (
                        <TableCell key={index}>{item}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {roles.length
                      ? roles.map((item, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell>{item.title}</TableCell>
                              {rows.map((page, i) => {
                                return (
                                  <TableCell key={i}>
                                    <Box
                                      sx={{ display: "flex", gap: "5px", ml: 2 }}
                                    >
                                      {item.access[page].edit ? (
                                        <span className="edit">Edit</span>
                                      ) : undefined}
                                      {item.access[page].view ? (
                                        <span className="view">View</span>
                                      ) : undefined}
                                      {item.access[page].edit === false &&
                                      item.access[page].view === false ? (
                                        <span className="none">None</span>
                                      ) : undefined}
                                    </Box>
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })
                      : undefined}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="tables_div">
              <div className="some_title">Department Details</div>
              <TableContainer>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell>Department Name</TableCell>
                      <TableCell>Display Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {departmentList.map((department) => (
                      <TableRow key={department.id}>
                        <TableCell>{department.title}</TableCell>
                        <TableCell>{department.display_title}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="chyme-jets">
              <span>Confirmation</span>
              <div>
                <input
                  id="approved"
                  type="checkbox"
                  checked={approved}
                  onClick={() => setApproved((prev) => !prev)}
                />
                <label htmlFor="approved">
                  I have verified above information is correct
                </label>
              </div>
            </div>
            
          </div>
      );
    }
    export default FinishOnboard;
    