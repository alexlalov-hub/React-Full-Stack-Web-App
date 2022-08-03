import moment from 'moment'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { MoreHoriz, ThumbUp, Delete } from '@mui/icons-material';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { postDeletion, postLiking } from '../../../features/post/postSlicer';

const Post = ({
    post,
    setCurrentId
}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.name}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button sx={{ color: 'white', size: 'large' }} onClick={(e) => { e.stopPropagation(); setCurrentId(post._id) }}>
                    <MoreHoriz fontSize='medium'></MoreHoriz>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='InfoText'>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant='body2' gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={(e) => { e.stopPropagation(); dispatch(postLiking(post._id)) }}>
                    <ThumbUp fontSize='small' />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => { dispatch(postDeletion(post._id)) }}>
                    <Delete fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;