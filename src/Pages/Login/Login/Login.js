import React, { useState } from 'react';
<<<<<<< HEAD
import { Container, Grid, TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import loginImage from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2} >
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>Login</Typography>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}


                    <form onSubmit={handleLoginSubmit}>
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
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
<<<<<<< HEAD
                        <Button sx={{ width: '75%', m: 1 }} variant="contained" type="submit">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={loginImage} alt="" />
=======
                        <Button sx={{width: '75%' , m:1}} variant="contained" type="submit">Login</Button>
                        <NavLink style={{textDecoration:'none'}} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} src={loginImage} alt="" />
>>>>>>> 1986b99df92337b785fbbd886af9c0aed4673347
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;