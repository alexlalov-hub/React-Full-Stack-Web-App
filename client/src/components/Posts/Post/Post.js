import moment from 'moment'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { MoreHoriz, ThumbUp, Delete } from '@mui/icons-material';
import useStyles from './styles'

const Post = ({
    post
}) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white', size: 'small' }} onClick={() => { }}>
                    <MoreHoriz fontSize='default'></MoreHoriz>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='InfoText'>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => { }}>
                    <ThumbUp fontSize='small' />
                    Like
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => { }}>
                    <Delete fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;