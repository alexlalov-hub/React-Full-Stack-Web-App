import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'

import useStyles from '../styles'
import { useDispatch } from 'react-redux'
import { postCommenting } from '../../../features/post/postSlicer'

const Comments = ({ post }) => {
    const classes = useStyles()
    const [comments, setComments] = useState(post.comments)
    const [currentComment, setCurrentComment] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()

    const handleClick = () => {
        const comment = `${user?.user?.name ? user.user.name : `${user.user.given_name} ${user.user.family_name}`}: ${currentComment}`

        dispatch(postCommenting(comment, post._id))
    }

    return (
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                {comments.map((c, i) => (
                    <Typography key={i} gutterBottom variant='subtitle1'>
                        Comment {i}
                    </Typography>
                ))}
            </div>
            {user && (
                <div style={{ width: '60%' }}>
                    <Typography gutterBottom variant='h6'>
                        Write a comment
                    </Typography>
                    <TextField
                        fullWidth
                        rows={4}
                        multiline
                        variant='outlined'
                        label='Comment'
                        value={currentComment}
                        onChange={(e) => setCurrentComment(e.target.value)}
                    />
                    <Button sx={{ marginTop: '10px' }} fullWidth disabled={!currentComment} variant='contained' onClick={handleClick}>Comment</Button>
                </div>
            )}

        </div>
    )
}

export default Comments