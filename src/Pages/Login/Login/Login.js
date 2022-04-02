import React, { useState } from 'react';
import { Container, Grid ,TextField , Button , Typography} from '@mui/material';
import loginImage from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
const Login = () => {
    const [loginData , setLoginData ] = useState({})
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
    }
    
    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant='body1' gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width: '75%' , m:1}} 
                            id="standard-basic" 
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange} 
                            variant="standard" />
                        <TextField 
                            sx={{width: '75%' , m:1}} 
                            id="standard-basic" 
                            label="Password" 
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button sx={{width: '75%' , m:1}} variant="contained" type="submit">Login</Button>
                        <NavLink style={{textDecoration:'none'}} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={loginImage} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;