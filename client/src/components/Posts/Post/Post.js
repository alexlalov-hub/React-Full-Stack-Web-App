import { useState, useEffect, Fragment } from 'react';
import moment from 'moment'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { MoreHoriz, ThumbUp, ThumbUpOutlined, Delete } from '@mui/icons-material';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { postDeletion, postLiking } from '../../../features/post/postSlicer';
import { useLocation } from 'react-router';

const Post = ({
    post,
    setCurrentId
}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [location])

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.user?.sub || user?.user?._id))
                ? (
                    <Fragment><ThumbUp fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</Fragment>
                ) : (
                    <Fragment><ThumbUpOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</Fragment>
                );
        }

        return <Fragment><ThumbUpOutlined fontSize="small" />&nbsp;Like</Fragment>;
    };

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

            <div className={classes.overlay}>
                <Typography variant='h6'>{post.name}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {(user?.user?.sub === post?.creator || user?.user?._id === post?.creator) && (
                <div className={classes.overlay2}>
                    <Button sx={{ color: 'white', size: 'large' }} onClick={(e) => { e.stopPropagation(); setCurrentId(post._id) }}>
                        <MoreHoriz fontSize='medium'></MoreHoriz>
                    </Button>
                </div>
            )}

            <div className={classes.details}>
                <Typography variant='body2' color='InfoText'>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>

            <CardContent>
                <Typography variant='body2' gutterBottom>{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' disabled={!user?.user} onClick={() => { dispatch(postLiking(post._id)) }}>
                    <Likes />
                </Button>
                {(user?.user?.sub === post?.creator || user?.user?._id === post?.creator) && (
                    <Button size='small' color='primary' onClick={() => { dispatch(postDeletion(post._id)) }}>
                        <Delete fontSize='small' />
                        Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    )
}

export default Post;