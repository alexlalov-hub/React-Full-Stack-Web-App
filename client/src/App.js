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
                <Toolbar>
                    <Button sx={{ color: "black", position: "right" }}>Login</Button>
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
