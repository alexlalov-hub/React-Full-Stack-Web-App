import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'

const theme = createTheme()

function App() {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <ThemeProvider theme={theme}>
            <GoogleOAuthProvider clientId='217616907290-r6vfns4dgccria3iddk3i56d0a2tkkgo.apps.googleusercontent.com'>
                <BrowserRouter>
                    <Container maxWidth="xl" >
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Navigate replace to='/posts' />} />
                            <Route path='/posts' element={<Home />} />
                            <Route path='/posts/search' element={<Home />} />
                            <Route path='/posts/:id' element={<PostDetails />} />
                            <Route path='/auth' element={!user ? <Auth /> : <Navigate replace to='/posts' />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </ThemeProvider>
    );
}

export default App;
