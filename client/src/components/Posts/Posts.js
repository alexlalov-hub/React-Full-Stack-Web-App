import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../features/post/postSlicer';
import Post from './Post/Post';
import useStyles from './styles'

const Posts = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Post />
    )
}

export default Posts;