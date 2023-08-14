import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Modal,
  TextField,
  Grid,
  Button,
  makeStyles,
  Paper,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControlLabel
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    marginBottom: theme.spacing(2)
  },
  subHeading: {
    marginBottom: theme.spacing(2)
  },
  roleSelectionContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4)
  },
  squareBox: {
    width: 150,
    height: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&.selectedRole": {
      backgroundColor: "#F9C623"
    }
  },
  roleText: {
    marginTop: theme.spacing(2)
  },
  permissionsContainer: {
    marginBottom: theme.spacing(2)
  },
  permissionBox: {
    padding: theme.spacing(2),
    border: "1px solid #ccc",
    borderRadius: 8,
    marginBottom: theme.spacing(2)
  },
  permissionHeading: {
    marginBottom: theme.spacing(1),
    fontWeight: "bold" 
  },
  checkBoxLabel: {
    display: "flex",
    alignItems: "center"
  },
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  flexboxContainer: {
    width: "30%", 
    backgroundColor: "white",
    borderRadius: 16,
    padding: theme.spacing(4),
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    alignItems:"left"
  },
  modalHeading: {
    marginBottom: theme.spacing(2)
  },
  modalTextField: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  modalButton: {
    width: "100%",
    marginBottom: theme.spacing(4),
    backgroundColor: '#F9C623',

  },
 
  modalPermissionTableContainer: {
    marginTop: theme.spacing(2),
    width: "100%" 
  },
  modalPermissionTable: {
    width: "100%" 
  },
  modalSaveButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#F9C623',

  }
}));

const CreateRole = () => {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState(null);
  const [role, setRole] = useState("");
  const [showPermissionTable, setShowPermissionTable] = useState(false);
  const handleSaveAndClose = () => {
    setShowPermissionTable(false);
  };
  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleAddRole = () => {
    setShowPermissionTable(true);
    handleClose();
  };
  const handleClose = () => {
    setSelectedRole(null);
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" className={classes.mainHeading}>
          Create Role
        </Typography>
        <Typography variant="subtitle1" className={classes.subHeading}>
          Lorem Ipsum is simply dummy text
        </Typography>
        <Box className={classes.roleSelectionContainer}>
          <Grid item xs={4}>
            <Paper
              className={`${classes.squareBox} ${
                selectedRole === "Manager" ? "selectedRole" : ""
              }`}
              onClick={() => handleRoleClick("Manager")}
            >
              <img src="Images/profile.png   " alt="Manager" />
              <Typography variant="h6" className={classes.roleText}>
                Manager
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              className={`${classes.squareBox} ${
                selectedRole === "Executive" ? "selectedRole" : ""
              }`}
              onClick={() => handleRoleClick("Executive")}
            >
              <img src="Images/user.png  " alt="Executive" />
              <Typography variant="h6" className={classes.roleText}>
                Executive
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              className={`${classes.squareBox} ${
                selectedRole === "AddRole" ? "selectedRole" : ""
              }`}
              onClick={() => handleRoleClick("AddRole")}
            >
              <img src="Images/plus-square.png  " alt="Add Role" />
              <Typography variant="h6" className={classes.roleText}>
                Add Roles
              </Typography>
            </Paper>
          </Grid>
        </Box>
        {selectedRole && selectedRole !== "AddRole" && (
          <Box>
            <Typography variant="h5" className={classes.mainHeading}>
              {`${selectedRole} Roles and Permissions`}
            </Typography>
            <Grid
              container
              spacing={2}
              className={classes.permissionsContainer}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <Grid item xs={4} key={index}>
                  <Paper className={classes.permissionBox}>
                    <Typography
                      variant="h6"
                      className={classes.permissionHeading}
                    >
                      {index % 2 === 0 ? "Customers" : "Banquet Halls"}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <label className={classes.checkBoxLabel}>
                          <Checkbox color="primary" />
                          View
                        </label>
                      </Grid>
                      <Grid item xs={6}>
                        <label className={classes.checkBoxLabel}>
                          <Checkbox color="primary" />
                          Create
                        </label>
                      </Grid>
                      <Grid item xs={6}>
                        <label className={classes.checkBoxLabel}>
                          <Checkbox color="primary" />
                          Edit
                        </label>
                      </Grid>
                      <Grid item xs={6}>
                        <label className={classes.checkBoxLabel}>
                          <Checkbox color="primary" />
                          Delete
                        </label>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
         <Modal open ={selectedRole==="AddRole"} onClose= {() => setSelectedRole(null)} className={classes.modalContainer}>
         <Box className={classes.flexboxContainer}>
           <Typography variant="h4" className={classes.modalHeading}>
             Create User
           </Typography>
           <Typography variant="subtitle1" className={classes.modalHeading}>
             Create a new role for banquet hall e.g. Manager, Executive, etc.
           </Typography>
           <TextField
             label="Enter Role"
             variant="outlined"
             value={role}
             onChange={(e) => setRole(e.target.value)}
             className={classes.modalTextField}
           />
           <Button
             variant="contained"
          
             onClick={handleAddRole}
             className={classes.modalButton}
           >
             Add Role
           </Button>
           </Box>
       </Modal>
       
       <Box>
    {showPermissionTable && (
          <Box className={classes.modalPermissionTableContainer}>
            <Typography variant="h4" className={classes.heading}>
              Manage Permission
            </Typography>
            <Typography variant="subtitle1" className={classes.heading}>
              Create and manage access rights for a particular role.
            </Typography>
            <TableContainer
              component={Paper}
              className={classes.modalPermissionTable}
            >
              <Table aria-label="permission table">
                <TableHead>
                  <TableRow>
                    <TableCell>Role</TableCell>
                    <TableCell>Customers</TableCell>
                    <TableCell>Banquet hall</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Hall Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{role}</TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Edit"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="View"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Edit"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="View"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Edit"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="View"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Edit"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="View"
                      />
                    </TableCell>
                    <TableCell>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Edit"
                      />
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="View"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
            
              onClick={handleSaveAndClose}
              className={classes.modalSaveButton}
            >
              Save & Close
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};
export default CreateRole;