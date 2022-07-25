import React, { useEffect } from 'react'
import { Typography, AppBar, Grow, Grid, createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import globe from './images/globe-flat.png'
import useStyles from './style'
import { useSelector } from 'react-redux';

const theme = createTheme()

function App() {
    const classes = useStyles(theme)
    const posts = useSelector((store) => store.posts)

    console.log(posts);
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position='static' color='inherit' sx={{ flexDirection: 'row' }}>
                    <Typography className={classes.heading} variant='h2' align='center'>Traveler's Haven</Typography>
                    <img className={classes.image} src={globe} alt="Memories" height="50px" sx={{}} />
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
        </ThemeProvider>
    );
}

export default App;
