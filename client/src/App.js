import React, { useEffect } from 'react'
import { Typography, AppBar, Grow, Grid, createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import globe from './images/globe-flat.png'
import useStyles from './style'

const theme = createTheme()

function App() {
    const classes = useStyles(theme)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position='static' color='inherit' sx={{ flexDirection: 'row' }}>
                    <Typography className={classes.heading} variant='h2' align='center'>Traveler's Haven</Typography>
                    <img className={classes.image} src={globe} alt="Memories" height="60px" sx={{}} />
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
