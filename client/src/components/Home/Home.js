import React, { useState } from 'react'
import { Grow, Container, Grid, Paper, AppBar, TextField, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router'

import useStyles from './styles'

import Paginate from '../Pagination/Paginate'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux'
import { searchForPosts } from '../../features/post/postSlicer'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const query = useQuery()
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const page = query.get('page') || 1
    const [search, setSearch] = useState('')


    const searchPost = () => {
        if (search) {
            dispatch(searchForPosts(search))
        } else {
            navigate('/')
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost()
        }
    }

    return (
        <Grow in>
            <Container maxWidth={false}>
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={4} >
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position='static' color='inherit'>
                            <TextField
                                name='search'
                                variant='outlined'
                                label='Search for destinations'
                                fullWidth
                                onKeyDown={handleKeyPress}
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }}
                            />
                            <Button onClick={searchPost} sx={{ marginTop: '5px' }} color='primary'>Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}>
                            <Paginate page={Number(page)} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home