import { Button, createTheme, Paper, TextField, Typography } from '@mui/material';
import FileBase from 'react-file-base64'
import { useState } from 'react';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { postCreation } from '../../features/post/postSlicer';

const theme = createTheme()

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const classes = useStyles(theme)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (postData.selectedFile !== '') {
            dispatch(postCreation(postData))
        }
    }

    const clearFields = () => {

    }

    const validateTitle = () => {
        if (postData.title.length < 3) {
            return <Typography variant='h9' color='error' fontFamily='Roboto'>Creator must be at least 3 characters long.</Typography>
        } else if (postData.title.length > 20) {
            return <Typography variant='h9' color='error' fontFamily='Roboto'>Creator must shorter than 20 characters.</Typography>
        }
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a destination</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => { setPostData({ ...postData, creator: e.target.value }) }} required />
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => { setPostData({ ...postData, title: e.target.value }) }} onBlur={validateTitle} required />
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => { setPostData({ ...postData, message: e.target.value }) }} required />
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => { setPostData({ ...postData, tags: e.target.value }) }} required />
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => { setPostData({ ...postData, selectedFile: base64 }) }}
                    />
                </div>
                <Button sx={{ marginBottom: 1 }} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='error' size='small' onClick={clearFields} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;