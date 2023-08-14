import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = createTheme({
        palette: {
            primary: {
                main: '#15101F',
            },
        },
    });
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <>
              
                    <AppBar position="sticky">
                        <Toolbar className='header' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Typography variant="h6" className='logo' component="div" sx={{ flexGrow: 1 }}>
                                <img src="Images/Logo.svg" alt="Logo" />
                            </Typography>
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                sx={{ display: { sm: 'block', md: 'none' } }}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <div className="navbar-items">
                                <Button component={Link} to="/" color="inherit">
                                    Resources
                                </Button>
                                <Button component={Link} to="/about" color="inherit">
                                    Pricing
                                </Button>
                                <Button component={Link} to="/contact" color="inherit">
                                    Login
                                </Button>

                                <Button variant="contained" className='start'>
                                    Start for free
                                </Button>

                            </div>

                        </Toolbar>
                    </AppBar>
                
           
                </>
            </ThemeProvider>
        </Router>
    );
}

export default Header;