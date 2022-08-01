import { Button, createTheme, Paper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { postCreation, postUpdate } from '../../features/post/postSlicer';

const theme = createTheme()

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const [errors, setErrors] = useState({})
    const post = useSelector((state) => currentId ? state.posts.posts.find((post) => post._id === currentId) : null)
    const classes = useStyles(theme)
    const dispatch = useDispatch()

    useEffect(() => {
        if (post) {
            setPostData({ ...post })
        }
    }, [post])

    const onSubmit = (e) => {
        e.preventDefault()

        if (validate()) {
            if (currentId) {
                dispatch(postUpdate({ currentId, postData }))
                clearFields();
            } else {
                dispatch(postCreation(postData))
                clearFields();
            }
        }
    }

    const clearFields = () => {
        setCurrentId(null)
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    const validate = () => {
        let errorObject = {}
        errorObject.creator = postData.creator.length > 2 && postData.creator.length < 20 ? "" : "Creator must be between 3 and 20 characters."
        errorObject.title = postData.title.length > 2 && postData.title.length < 20 ? "" : "Title must be between 3 and 20 characters."
        errorObject.message = postData.message ? "" : "Message is required."
        errorObject.tags = !postData.tags.includes('') ? "" : "Tag/tags is/are required."
        errorObject.selectedFile = postData.selectedFile ? "" : "Image is required"

        setErrors({ ...errorObject })

        return Object.values(errorObject).every(x => x === '')
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={onSubmit}>
                <Typography variant='h6'>Creating a destination</Typography>

                <TextField value={postData.creator} onChange={(e) => {
                    setPostData({ ...postData, creator: e.target.value })
                }} variant='outlined' label='Creator' fullWidth error={errors.creator ? true : false} helperText={errors.creator} />

                <TextField value={postData.title} onChange={(e) => {
                    setPostData({ ...postData, title: e.target.value })
                }} variant='outlined' label='Title' fullWidth error={errors.title ? true : false} helperText={errors.title} />

                <TextField value={postData.message} onChange={(e) => {
                    setPostData({ ...postData, message: e.target.value })
                }} variant='outlined' label='Message' fullWidth error={errors.message ? true : false} helperText={errors.message} />

                <TextField value={postData.tags} onChange={(e) => {
                    setPostData({ ...postData, tags: e.target.value.split(',') })
                }} variant='outlined' label='Tags (separated by commas)' fullWidth error={errors.tags ? true : false} helperText={errors.tags} />

                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({ base64 }) => { setPostData({ ...postData, selectedFile: base64 }) }} />
                </div>
                {errors.selectedFile && <Typography variant='h12' fontFamily='Roboto' fontSize={13} color='error'>{errors.selectedFile}</Typography>}

                <Button sx={{ marginBottom: 1, marginTop: 1 }} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='error' size='small' onClick={clearFields} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;