import { CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Post from './Post/Post';
import useStyles from './styles'
import { getPosts } from '../../features/post/postSlicer';

const Posts = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId])

    return (
        !posts?.length ? <CircularProgress /> :
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={6} sm={3}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                    </Grid>
                ))}
            </Grid>
    )
}

export default Posts;   