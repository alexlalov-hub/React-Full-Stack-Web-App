import React, { useEffect } from 'react'
import moment from 'moment'
import { Typography, Divider } from '@mui/material'

import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getPost } from '../../features/post/postSlicer'
import Comments from './Comments/Comments'

const PostDetails = () => {
    const classes = useStyles()
    const post = useSelector(state => state.posts.post)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getPost(id))
    }, [id])

    return (
        <div className={classes.card}>
            <div className={classes.section}>
                <Typography variant="h3" component="h2">{post.title}</Typography>
                <Typography gutterBottom variant="h6" component="h2">{post.tags?.map((tag) => `#${tag} `)}</Typography>
                <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                <Typography variant="h6">Created by: {post.name}</Typography>
                <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                <Divider sx={{ margin: '20px 0' }} />
                <Comments post={post} />
                <Divider sx={{ margin: '20px 0' }} />
            </div>
            <div className={classes.imageSection}>
                <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            </div>
        </div>
    )
}

export default PostDetails