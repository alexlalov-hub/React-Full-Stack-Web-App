import { AppBar, Toolbar, Button } from '@mui/material'

function Navigation() {
    return (
        <AppBar sx={{ position: "static" }}>
            <Toolbar >
                <Button sx={{ color: "black", fontSize: "17px" }}>Home</Button>
                <Button sx={{ color: "black", fontSize: "17px" }}>Catalog</Button>
                <Button sx={{ color: "black", fontSize: "17px" }}>About us</Button>
                <Button sx={{ color: "black", left: "2030px", fontSize: "17px" }}>Register</Button>
                <Button sx={{ color: "black", left: "2035px", fontSize: "17px" }}>Login</Button>
                <Button sx={{ color: "black", left: "2040px", fontSize: "17px" }}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;