import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="#000000" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        handyman
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#e2b808'
        } 
    },
}
);

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:1337/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // eslint-disable-next-line no-template-curly-in-string
            backgroundImage: 'url(https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000)' ,
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#000000',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square bgcolor={'#e2b808'}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#000000'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#000000' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, color: '#000000' }} method='POST'>
              <TextField 
                margin="normal"
                color= "primary"
                required
                fullWidth
                id="email"
                value={data.email}
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                color= "primary"
                required
                fullWidth
                name="password"
                label="Password"
                value={data.password}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
        
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#000000' }}
                //color = '#000000'
              >
                Sign In
              </Button>
              {error}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color= '#000000'>
                    Forgot password?
                  </Link>
                </Grid>
                
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default Login;