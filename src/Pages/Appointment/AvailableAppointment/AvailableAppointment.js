import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from '../Booking/Booking';
import {Typography} from '@mui/material';
const bookings = [
    {
        id: 1, 
        name:'Teeth Orthodonics',
        time: '08.00 AM - 9.00 AM',
        space:10,
    },
    {
        id: 2, 
        name:'Cavity Protection',
        time: '08.00 AM - 9.00 AM',
        space:10,
    },
    {
        id: 3, 
        name:'Cosmetic Dentistry',
        time: '10:05 AM - 11.00 AM',
        space:10,
    },
    {
        id: 4, 
        name:'Teeth Cleaning',
        time: '08.00 AM - 9.00 AM',
        space:10,
    },
    {
        id: 5, 
        name:'Cavity Protection',
        time: '08.00 AM - 9.00 AM',
        space:10,
    },
    {
        id: 6, 
        name:'Teeth Orthodonics',
        time: '08.00 AM - 9.00 AM',
        space:10,
    },
]


const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{color:'info.main',  py:3, fontWeight:600}}>Available Appointment {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking
                        
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;