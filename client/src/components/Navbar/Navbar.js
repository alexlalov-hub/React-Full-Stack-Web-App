import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography, } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import globe from '../../images/globe-flat.png'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { logOut } from '../../features/auth/authSlicer'


const Navbar = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [location])

    const logout = () => {
        dispatch(logOut())

        navigate('/')
    }

    return (
        <AppBar className={classes.appBar} position='static' color='inherit' sx={{ flexDirection: 'row', display: 'flex' }}>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>Traveler's Haven</Typography>
                <img className={classes.image} src={globe} alt="Memories" height="50px" sx={{}} />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.user.given_name ? user.user.given_name : user.user.name} src={user.user.picture ? user.user.picture : null}>{user.user.given_name ? user.user.given_name.charAt(0) : user.user.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6' color='primary'>{user.user.given_name ? `${user.user.given_name} ${user.user.family_name}` : user.user.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
