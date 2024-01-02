import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/homepage/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      
      <Qualification />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  )
}

export default App;
