import { AppBar, Toolbar, Button } from '@mui/material'
import { Login } from '../authentication/Login'

function Navigation() {
    return (
        <AppBar sx={{ position: "static" }}>
            <Toolbar >
                <Button sx={{ color: "black", fontSize: "17px" }}>Home</Button>
                <Button sx={{ color: "black", fontSize: "17px" }}>Catalog</Button>
                <Button sx={{ color: "black", fontSize: "17px" }}>About us</Button>
                <Button sx={{ color: "black", left: "2010px", fontSize: "17px" }}>Register</Button>
                <Button sx={{ color: "black", left: "2015px", fontSize: "17px" }}>Login</Button>
                <Button sx={{ color: "black", left: "2020px", fontSize: "17px" }}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;