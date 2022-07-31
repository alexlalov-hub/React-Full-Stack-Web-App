import { Button, createTheme, Paper, TextField, Typography } from '@mui/material';
import FileBase from 'react-file-base64'
import { useEffect, useState } from 'react';
import useStyles from './styles'
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form'
import { postCreation } from '../../features/post/postSlicer';

const theme = createTheme()

const Form = () => {
    const methods = useForm({ mode: 'onBlur' });
    const { handleSubmit, control, formState: { errors }, resetField } = methods
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const classes = useStyles(theme)
    const dispatch = useDispatch()

    const resetFields = () => {
        resetField('creator')
        resetField('title')
        resetField('message')
        resetField('tags')
        resetField('image')
    }

    const onSubmit = (values, e) => {
        e.preventDefault()

        dispatch(postCreation(postData))

        resetFields()
    }

    const clearFields = () => {

    }

    const handleImage = (event) => {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setPostData({ ...postData, selectedFile: e.target.result })
        }
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit(onSubmit)}>
                <Typography variant='h6'>Creating a destination</Typography>
                <Controller
                    defaultValue=''
                    name='creator'
                    control={control}
                    // rules={{ required: 'Creator required' } }}
                    render={({ field }) => <TextField value={field.value} onChange={(e, value) => {
                        field.onChange(e, value); setPostData({ ...postData, creator: e.target.value })
                    }} variant='outlined' label='Creator' fullWidth rules={field.rules} />}
                    rules={{
                        required: 'Creator is required',
                        minLength: { value: 3, message: 'Creator must be at least 3 characters long' },
                        maxLength: { value: 20, message: 'Creator must be shoter than 20 characters' }
                    }}
                />
                {errors.creator?.message === 'Creator is required' && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Creator is required</Typography>}
                {errors.creator?.message === 'Creator must be at least 3 characters long'
                    && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Creator must be at least 3 characters long</Typography>}
                {errors.creator?.message === 'Creator must be shoter than 20 characters'
                    && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Creator must be shoter than 20 characters</Typography>}


                <Controller
                    defaultValue=''
                    name='title'
                    control={control}
                    render={({ field }) => <TextField value={field.value} onChange={(e, value) => {
                        field.onChange(e, value); setPostData({ ...postData, title: e.target.value })
                    }} variant='outlined' label='Title' fullWidth rules={field.rules} />}
                    rules={{
                        required: 'Title is required',
                        minLength: { value: 3, message: 'Title must be at least 3 characters long' },
                        maxLength: { value: 20, message: 'Title must be shoter than 20 characters' }
                    }}
                />
                {errors.title?.message === 'Title is required' && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Title is required</Typography>}
                {errors.title?.message === 'Title must be at least 3 characters long'
                    && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Title must be at least 3 characters long</Typography>}
                {errors.title?.message === 'Title must be shoter than 20 characters'
                    && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Title must be shoter than 20 characters</Typography>}


                <Controller
                    defaultValue=''
                    name='message'
                    control={control}
                    render={({ field }) => <TextField value={field.value} onChange={(e, value) => {
                        field.onChange(e, value); setPostData({ ...postData, message: e.target.value })
                    }} variant='outlined' label='Message' fullWidth rules={field.rules} />}
                    rules={{
                        required: 'Message is required',
                        minLength: { value: 3, message: 'Message must be at least 3 characters long' },
                        maxLength: { value: 20, message: 'Message must be shoter than 20 characters' }
                    }}
                />
                {errors.message?.message === 'Message is required' && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Message is required</Typography>}


                <Controller
                    defaultValue=''
                    name='tags'
                    control={control}
                    render={({ field }) => <TextField value={field.value} onChange={(e, value) => {
                        field.onChange(e, value); setPostData({ ...postData, tags: e.target.value })
                    }} variant='outlined' label='Tags' fullWidth rules={field.rules} />}
                    rules={{
                        required: 'Tags are required'
                    }}
                />
                {errors.tags?.message === 'Tags are required' && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Tags are required</Typography>}

                <div className={classes.fileInput}>
                    {/* <FileBase
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => {
                            setPostData({ ...postData, selectedFile: base64 })
                        }}
                    /> */}
                    {/* <Controller
                        defaultValue=''
                        name='image'
                        control={control}
                        render={({ field }) => <FileBase value={field.value} onChange={(e, value) => { field.onChange(e, value) }} variant='outlined' label='Tags' type='file' multiple={false}
                            onDone={({ base64 }) => {
                                setPostData({ ...postData, selectedFile: base64 })
                            }} fullWidth rules={field.rules} />}
                        rules={{
                            required: 'Image is required'
                        }}
                    /> */}
                    <Controller
                        defaultValue=''
                        name='image'
                        control={control}
                        render={({ field }) => <input value={field.value} onChange={(e, value) => { field.onChange(e, value); handleImage(e) }} variant='outlined' label='Tags' type='file' rules={field.rules} />}
                        rules={{
                            required: 'Image is required'
                        }}
                    />
                </div>
                {errors.image?.message === 'Image is required' && <Typography variant='h12' color='error' fontFamily='Roboto' fontSize={15}>Image is required</Typography>}
                <Button sx={{ marginBottom: 1, marginTop: 1 }} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='error' size='small' onClick={clearFields} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;