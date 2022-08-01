import React, { useState } from 'react'
import { Typography, AppBar, Grow, Grid, createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import globe from './images/globe-flat.png'
import useStyles from './style'

const theme = createTheme()

function App() {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles(theme)

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                <AppBar className={classes.appBar} position='static' color='inherit' sx={{ flexDirection: 'row', display: 'flex' }}>
                    <Typography className={classes.heading} variant='h2' align='center'>Traveler's Haven</Typography>
                    <img className={classes.image} src={globe} alt="Memories" height="50px" sx={{}} />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
                            <Grid item xs={12} sm={7}>
                                <Posts currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    );
}

export default App;
