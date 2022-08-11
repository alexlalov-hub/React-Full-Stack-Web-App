import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    media: {
        borderRadius: '20px',
        objectFit: 'cover',
        maxHeight: '500px',
        maxWidth: '1000px'
    },
    card: {
        borderRadius: '20px',
        display: 'flex',
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            flexDirection: 'column',
        },
    },
    section: {
        borderRadius: '20px',
        margin: '10px',
        flex: 1,
    },
    imageSection: {
        margin: '20px 20px 20px 20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    recommendedPosts: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    loadingPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        height: '39vh',
    },
    commentsOuterContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    commentInnerContainer: {
        maxHeight: '200px',
        overflowY: 'auto',
    }
}));