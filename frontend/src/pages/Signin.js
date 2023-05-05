import React, { useState } from 'react'
import { Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link1 from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useLoginMutation} from "../services/appApi";

//Seller and User Signin 

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Herbal Medics
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();


function Login() {


    function changebackground(){
        document.body.style.backgroundColor = 'green';
      } 
    const[email,setEmail] =useState('');
    const[password,setPassword] =useState('');
    const [login, { isError, isLoading, error }] = useLoginMutation();

    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });
    }
  return (
    <ThemeProvider theme={theme}>
         {isError && <Alert variant="danger">{error.data}</Alert>}   
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/premium-photo/backpack-asian-man-mountain-see-view-panorama-beautiful-nature-landscape-sea-adventure-vacation-travel-leisure-asia-mu-ko-ang-thong-island-national-park-background-thailand_536080-1002.jpg?w=2000)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
              <TextField
                  value={email}  
                margin="normal"
                required onChange={(e) => setEmail(e.target.value)}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                  value={password}  
                margin="normal"
                required onChange={(e) => setPassword(e.target.value)}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit" disabled={isLoading}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link1 href="/Signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link1>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login


