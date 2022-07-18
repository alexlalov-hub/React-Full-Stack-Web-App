import { Button, Toolbar, AppBar, Typography, CssBaseline } from '@mui/material';
import { color, Container, createTheme, ThemeProvider } from '@mui/system';
import { Fragment } from 'react';

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        }
    }
})

function App() {
    return (
        <Fragment>
            <CssBaseline />
            <AppBar sx={{ position: "static" }}>
                <Toolbar >
                    <Button sx={{ color: "black", left: "2270px", fontSize: "17px" }}>Register</Button>
                    <Button sx={{ color: "black", left: "2275px", fontSize: "17px" }}>Login</Button>
                    <Button sx={{ color: "black", left: "2280px", fontSize: "17px" }}>Logout</Button>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>

                        <Typography variant='h2' color="inherit">Hello</Typography>
                    </Container>
                </div>
            </main>
        </Fragment>


    );
}

export default App;
