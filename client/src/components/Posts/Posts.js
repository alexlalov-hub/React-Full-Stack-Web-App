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
    }, [currentId, dispatch])

    return (
        !posts.length ? <CircularProgress /> :
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId}></Post>
                    </Grid>
                ))}
            </Grid>

    )
}

export default Posts;   