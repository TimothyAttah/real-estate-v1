import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import { theme } from './themes';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: '100px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
