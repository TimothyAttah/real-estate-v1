import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './pages/contact/Contact';
import { Footer } from './components/footer/Footer';
import { About } from './pages/about/About';
import { Suites } from './pages/suites/Suites';

const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      document
        .querySelector('header')
        .classList.toggle('window-scroll', window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/for-rent' element={<Suites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
