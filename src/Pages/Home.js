
import { Grid, Card, CardContent, Typography, Button, CardMedia } from '@mui/material';
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const Home = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const tabStyles = {
        backgroundColor: 'white',
        '&.Mui-selected': {
            backgroundColor: '#D8232A',
            borderRadius: '20px',
            color:'#ffff',
        },
    };
    const cardsData = [
        {
            id: 1,
            title: 'Free',
            content: 'Lorem Ipsum is simply dummy',
            includes: 'Includes:',
            color: '#0080FF',
            days: '15days',
            month: 'free trial',
            button: 'Try 15days free trial',
        },
        {
            id: 2,
            title: 'Professional',
            content: 'Lorem Ipsum is simply dummy',
            h5: 'Lorem Ipsum',
            includes: 'Includes:',
            color: '#FF6B00',
            rupee: '₹',
            days: '499',
            month: 'Per / Month',
            button: 'Get Started',
        },
        {
            id: 3,
            title: 'Premium',
            content: 'Lorem Ipsum is simply dummy',
            h5: 'Lorem Ipsum',
            includes: 'Includes:',
            color: '#FFD600',
            rupee: '₹',
            days: '699',
            month: 'Per / Month',
            button: 'Get Started',
        },
        {
            id: 4,
            title: 'Elite',
            content: 'Lorem Ipsum is simply dummy',
            h5: 'Lorem Ipsum',
            includes: 'Includes:',
            color: '#D8232A',
            days: '999',
            rupee: '₹',
            month: 'Per / Month',
            button: 'Get Started',
        },
    ];
    return (
        <div>
            <div className='master'>
                <div className='mast'>
                    <div className='image-container bg-image'>
                        <h1>Master your venue with our
                            <br>
                            </br>
                            <span >
                                Management Solutions!</span></h1>

                        <p>Unleash your venue's full potential by conquering challenges and streamlining processes effortlessly.</p>


                        <Button  >
                            Start for free
                        </Button>
                    </div>
                </div>

                <img src="Images/Banquet.jpg" />
            </div>
            <div>
            <div className="logo-slider-content">
                <p>Empowering Tomorrow's Companies with Innovative Solutions</p>
            <div className="marquee">
                <div className="marquee-inner">
                    <div className="marquee-content">
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider1.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider2.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider3.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider4.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider5.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider5.png"/>
                        </div>
                    </div>
                    <div className="marquee-content">
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider1.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider2.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider3.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider4.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider5.png"/>
                        </div>
                        <div className="marquee-item">
                            <img className="orb" src="Images/slider6    .png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className='back'>
                <div className='contain'>
                    <Grid container spacing={2} className="image">
                        <Grid item xs={12} md={6} order={{ xs: 1, sm: 1 }}>
                            <div className='cont'>
                                <h1> Effortless Venue Management Registration</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                <div className='start'>
                                    <Button  >
                                        Start for free
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 2 }}>
                            <div className='position2'>
                                <img src="Images/Image1.svg" alt="Image 1" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='contain1'>

                    <Grid container spacing={2} className="image">
                        <Grid item xs={12} sm={6} order={{ xs: 4, sm: 3 }}>
                            <div className='position3'>
                                <img src="Images/Group 17380.svg" alt="Image 2" />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} order={{ xs: 3, sm: 4 }}>
                            <div className='cont'>
                                <h1> Effortless Venue Management Registration</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                <div className='start'>
                                    <Button  >
                                        Start for free
                                    </Button>
                                </div>
                            </div>

                        </Grid>

                    </Grid>
                </div>
                <div className='contain2'>
                    <Grid container spacing={2} className="image">
                        <Grid item xs={12} sm={6} order={{ xs: 5, sm: 5 }}>

                            <div className='cont'>
                                <h1> Effortless Venue Management Registration</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                <div className='start'>
                                    <Button  >
                                        Start for free
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} order={{ xs: 6, sm: 6 }}>
                            <div className='position4'>
                                <img src="Images/Image3.png" alt="Image 3" />
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            <div className='bg' >
                <h1 className='pricing' >Pricing</h1>
                <div className="borderRadiusTabsWrapper">
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        className='border'
                        centered
                        indicatorColor="transparent"
                    >
                        <Tab label="Monthly" sx={tabStyles} />
                        <Tab label="Yearly" sx={tabStyles} />
                    </Tabs>
                </div>

                <TabPanel value={tabValue} index={0}>

                    <Typography>
                        <Grid className='' container spacing={2}>
                            {cardsData.map((card) => (
                                <Grid item xs={3} sm={6} md={3} lg={3} key={card.id}>
                                    <Card className='card-size'>
                                        <div className='margin-top-color' style={{ backgroundColor: card.color }}>

                                        </div>
                                        <CardContent>
                                            <Typography variant="h5" component="div" className='title'>
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" className='content'>
                                                {card.content}
                                            </Typography>
                                            <div className="days">
                                                <div className="days-container">
                                                    <span className="half-above-line">{card.rupee}</span>
                                                    <p>{card.days}</p>
                                                    <span className='month'>{card.month}</span>
                                                </div>
                                            </div>
                                            <Typography className='includes'>
                                                {card.includes}
                                            </Typography>

                                            <Typography variant="body2" className="tick-marks">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <p key={index}>
                                                        <span className="tick-mark" >
                                                            <img src="Images/Vector.png" />
                                                        </span>
                                                        Lorem Ipsum
                                                    </p>
                                                ))}
                                            </Typography>
                                            <div className='card-button'>
                                                <Button style={{ backgroundColor: card.color, color: '#ffffff', fontSize: '12px' }}>
                                                    {card.button}
                                                </Button>
                                            </div>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Typography>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>

                    <Typography>
                        <Grid className='' container spacing={2}>
                            {cardsData.map((card) => (
                                <Grid item xs={3} sm={6} md={3} lg={3} key={card.id}>
                                    <Card className='card-size'>
                                        <div className='margin-top-color' style={{ backgroundColor: card.color }}>

                                        </div>
                                        <CardContent>
                                            <Typography variant="h5" component="div" className='title'>
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" className='content'>
                                                {card.content}
                                            </Typography>
                                            <div className="days">
                                                <div className="days-container">
                                                    <span className="half-above-line">{card.rupee}</span>
                                                    <p>{card.days}</p>
                                                    <span className='month'>{card.month}</span>
                                                </div>
                                            </div>
                                            <Typography className='includes'>
                                                {card.includes}
                                            </Typography>

                                            <Typography variant="body2" className="tick-marks">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <p key={index}>
                                                        <span className="tick-mark" >
                                                            <img src="Images/Vector.png" />
                                                        </span>
                                                        Lorem Ipsum
                                                    </p>
                                                ))}
                                            </Typography>
                                            <div className='card-button'>
                                                <Button style={{ backgroundColor: card.color, color: '#ffffff', fontSize: '12px' }}>
                                                    {card.button}
                                                </Button>
                                            </div>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Typography>
                </TabPanel>
            </div>

            <div className='master'>
                <div className='mast'>
                    <h1>Unlock the potential of your venue with
                        <br>
                        </br>
                        <span>
                            powerful management solutions!</span></h1>
                    <p>Maximize your venue's success with our transformative management solutions.</p>
                    <div className="position" >


                        <Button  >

                            Start for free
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home;