import React, { useEffect, useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'

import useStyles from '../styles'
import { useDispatch } from 'react-redux'
import { postCommenting } from '../../../features/post/postSlicer'

const Comments = ({ post }) => {
    const classes = useStyles()
    const [comments, setComments] = useState(post.comments || [])
    const [currentComment, setCurrentComment] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()

    const handleClick = async () => {
        const comment = `${user?.user?.name ? user.user.name : `${user.user.given_name} ${user.user.family_name}`}: ${currentComment}`

        dispatch(postCommenting({ comment, id: post._id }))

        setComments(post.comments)
        setCurrentComment('')
    }

    useEffect(() => {
        setComments(post.comments)
    }, [post])

    return (
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer} style={{ maxHeight: '200px', overflowY: 'auto', width: '200px' }}>
                {comments?.map((comment, i) => (
                    <Typography key={i} gutterBottom variant='subtitle1'>
                        {comment}
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