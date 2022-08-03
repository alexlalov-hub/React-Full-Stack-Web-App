import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import useStyles from './styles'
import { getPosts } from '../../features/post/postSlicer';

const Paginate = ({ page }) => {
    const classes = useStyles()
    const numberOfPages = useSelector(state => state.posts.numberOfPages)
    const dispatch = useDispatch()

    useEffect(() => {
        if (page) {
            dispatch(getPosts(page))
        }
    }, [page, numberOfPages])

    return (
        <Pagination
            sx={{ marginTop: '10px' }}
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant='outlined'
            color='primary'
            renderItem={item => (
                <PaginationItem sx={{ marginBottom: '5px', marginTop: '5px' }} {...item} component={Link} to={`/posts?page=${Number(item.page)}`} />
            )}
        />
    )
}

export default Paginate