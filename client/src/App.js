import { Typography, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { Fragment } from 'react';

import Navigation from './components/common/Navigation';

function App() {
    return (
        <Fragment>
            <CssBaseline />
            <Navigation />
            <main style={{ backgroundColor: "#1976d2" }}>
                <div>
                    <Container sx={{ height: 1234 }}>
                        <Typography variant='h2' color="inherit">Hello</Typography>
                    </Container>
                </div>
                <footer>
                    Hello
                </footer>
            </main>

        </Fragment>
    );
}

export default App;
