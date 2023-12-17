import React from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
