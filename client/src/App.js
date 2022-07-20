import { Typography, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { Fragment } from 'react';

import Navigation from './components/common/Navigation';

function App() {
    return (
        <div style={{ height: 1235 }}>
            <CssBaseline />
            <Navigation />
            <main style={{ backgroundColor: "#1976d2" }}>
                <div>
                    <Container sx={{ height: 1235, backgroundColor: "black" }}>
                        <Typography variant='h2' color="inherit">Hello</Typography>
                    </Container>
                </div>
                <footer>
                    <p>Hello</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
