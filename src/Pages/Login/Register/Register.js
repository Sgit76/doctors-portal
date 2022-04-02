import React, { useState } from 'react';
<<<<<<< HEAD
import { Container, Grid, TextField, Button, Typography, CircularProgress, LinearProgress, Alert } from '@mui/material';
=======
import {  Container, Grid ,TextField , Button , Typography ,CircularProgress ,LinearProgress, Alert} from '@mui/material';
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
import loginImage from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
<<<<<<< HEAD
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
=======
    const [loginData , setLoginData ] = useState({})
    
    const {user , registerUser , isLoading , authError} = useAuth();
    
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
            alert('your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2} >
<<<<<<< HEAD
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>

                    <Typography variant='body1' gutterBottom>Register</Typography>


                    {isLoading && <LinearProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}




                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
=======
                <Grid item sx={{mt:8}} xs={12} md={6}>
                {isLoading && <LinearProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                <Typography variant='body1' gutterBottom>Register</Typography>
                    { !isLoading && <form onSubmit={handleLoginSubmit}>
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
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
<<<<<<< HEAD
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype your Password"
=======
                        <TextField 
                            sx={{width: '75%' , m:1}} 
                            id="standard-basic" 
                            label="Retype your Password" 
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
                            type="password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard" />
<<<<<<< HEAD
                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already registered? Please Login</Button></NavLink>
                    </form>}
                    {/* {isLoading && <CircularProgress />} */}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImage} alt="" />
=======
                        <Button sx={{width: '75%' , m:1}} variant="contained" type="submit">Register</Button>
                        <NavLink style={{textDecoration:'none'}} to="/login"><Button variant="text">Already registered? Please Login</Button></NavLink>
                    </form>}
                    {/* {isLoading && <CircularProgress />} */}
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={loginImage} alt="" />
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;