import { CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../features/post/postSlicer';


import Post from './Post/Post';
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { posts, status } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])



    return (
        status === 'pending' ? <CircularProgress /> :
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post}></Post>
                    </Grid>
                ))}
            </Grid>

    )
}

export default Posts;   