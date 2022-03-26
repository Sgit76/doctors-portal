import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import {Button, Typography } from '@mui/material';
const appointmentBanner ={
    background: `url(${bg})`,
    marginTop: 150,
    backgroundPosition: 'center',
    backgroundColor:'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    
}

const AppointmentBanner = () => {
    return (
        
        <Box style={appointmentBanner} sx={{ flexGrow: 1 , mb:1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{width:400, marginTop:'-110px' , background:'no-repeat'}}
                    src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', 
                    justifyContent:'flex-start',
                    alignItems:'center',
                    textAlign:'left',
                    }}>
                    <Box>
                        <Typography variant='h6' sx={{mb:5}} style={{ color:'#5ce7ed'}}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' sx={{mb:5}} style={{ color:'white'}}>
                        Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{mb:5}} style={{ color:'white' , fontSize: 13}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quidem asperiores quod blanditiis beatae. Velit perferendis, harum pariatur ipsum adipisci nobis quae porro vel, at quo optio eum id ut?
                        </Typography>
                        <Button variant='contained' style={{background:'linear-gradient(#009245, #FCEE21)'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>  
    );
};

export default AppointmentBanner;