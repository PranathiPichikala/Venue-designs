import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Checkbox,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexboxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: "white",
    borderRadius: 8,
    padding: theme.spacing(2),
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)"
  },
  tableContainer: {
    marginTop: theme.spacing(4)
  }
}));

const CreateUser = () => {
  const classes = useStyles();

  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [managerRole, setManagerRole] = useState(true);
  const [userList, setUserList] = useState([]);

  const handleSendInvitation = () => {
    const newUser = {
      fullName,
      mobileNo,
      email,
      gender,
      emailVerification: "Pending"
    };
    setUserList((prevUserList) => [...prevUserList, newUser]);
  };

  return (
    <Container maxWidth="md">
      <Box className={classes.flexboxContainer}>
        <Typography variant="h5">Create User</Typography>
        <Typography variant="subtitle1" className='managebanquet'>
          Add a new user for managing banquet hall bookings
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Gender"
              variant="outlined"
              select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Mobile No."
              variant="outlined"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email ID"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="subtitle2">Select Role</Typography>
              <Checkbox
                color="primary"
                name="managerRole"
                checked={managerRole}
                onChange={(e) => setManagerRole(e.target.checked)}
              />
              Manager
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendInvitation}
              className='sendinvitation'
            >
              Send Invitation
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Paper className={classes.tableContainer}>
        <Table>
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
            {userList.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.mobileNo}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell style={{ color: "red" }}>
                  {user.emailVerification}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default CreateUser;