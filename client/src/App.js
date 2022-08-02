import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'

const theme = createTheme()

function App() {

    return (
        <ThemeProvider theme={theme}>
            <GoogleOAuthProvider clientId='217616907290-r6vfns4dgccria3iddk3i56d0a2tkkgo.apps.googleusercontent.com'>
                <BrowserRouter>
                    <Container maxWidth="lg" sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/auth' element={<Auth />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </ThemeProvider>
    );
}

export default App;
