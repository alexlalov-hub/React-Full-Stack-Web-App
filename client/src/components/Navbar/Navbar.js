import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography, } from '@mui/material'
import { Link } from 'react-router-dom'
import globe from '../../images/globe-flat.png'
import useStyles from './styles'



const Navbar = () => {
    const classes = useStyles()

    const user = null
    return (
        <AppBar className={classes.appBar} position='static' color='inherit' sx={{ flexDirection: 'row', display: 'flex' }}>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>Traveler's Haven</Typography>
                <img className={classes.image} src={globe} alt="Memories" height="50px" sx={{}} />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button variant='contained' className={classes.logout} color='secondary'>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
