import { Typography, AppBar, Grow, Grid } from '@mui/material';
import { Container, StyledEngineProvider } from '@mui/system';

import './App.css'

import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Container maxWidth="lg">
                <AppBar className='appBar' position='static' color='inherit'>
                    <Typography className='heading' variant='h2' align='center'>Traveler's Heaven</Typography>
                    <TravelExploreIcon className='image' />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </StyledEngineProvider>
    );
}

export default App;
