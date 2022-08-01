import { Avatar, Button, Container, createTheme, Grid, Paper, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import React, { Fragment, useState } from 'react'

import useStyles from './styles'
import Input from './Inputs/Input'

const theme = createTheme()

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles(theme)

    const isSignup = false

    const handleShowPassword = () => setShowPassword((showing) => !showing)

    const handleSubmit = () => {

    }

    const handleChange = () => {

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
                                    <Input name='firstName' label='First Name' onChange={handleChange} autoFocus half />
                                    <Input name='lastName' label='Last Name' onChange={handleChange} half />
                                </Fragment>
                            )
                        }
                        <Input name='email' label='Email' onChange={handleChange} type='email' />
                        <Input name='password' label='Password' onChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && <Input name='confirmPassword' label="Repeat Password" handleChange={handleChange} type='password'></Input>
                        }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' sx={{ marginBottom: '16px', marginTop: '24px' }}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth