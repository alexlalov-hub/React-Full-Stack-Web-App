import React, { Fragment, useState } from 'react'
import { Avatar, Button, Container, createTheme, Grid, Paper, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router';

import useStyles from './styles'
import Input from './Inputs/Input'
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlicer';

const theme = createTheme()

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const classes = useStyles(theme)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleShowPassword = () => setShowPassword((showing) => !showing)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isSignup) {

        } else {

        }
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const switchMode = () => setIsSignup((signup) => !signup)

    const googleSuccessfulLogin = async (response) => {
        dispatch(login(response.credential))

        navigate('/')
    }

    const googleFailedLogin = (error) => {
        alert('Google Sign In was not successful. Try again later')

        navigate('/')
    }

    return (
        <Container component='main' maxWidth="xs" >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <Fragment>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                                </Fragment>
                            )
                        }
                        <Input name='email' label='Email' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && <Input name='confirmPassword' label="Repeat Password" handleChange={handleChange} type='password'></Input>
                        }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{ marginBottom: '16px', marginTop: '16px' }}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid item justifyContent='flex-end'>
                        <GoogleLogin
                            onSuccess={googleSuccessfulLogin}
                            onError={googleFailedLogin}
                        />
                    </Grid>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {
                                    isSignup ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth