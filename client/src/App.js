import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'

const theme = createTheme()

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Container maxWidth="lg" sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/auth' element={<Auth />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
