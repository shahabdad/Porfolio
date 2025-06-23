import React, { useEffect } from 'react';
import gsap from 'gsap';
import NavigationBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience'
import Contact from './Components/Contact';
import './App.css';

const App = () => {
  useEffect(() => {
    gsap.fromTo(
      '.home',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(
      '.about',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1 }
    );
    gsap.fromTo(
      '.experience',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 1.5 }
    );
    gsap.fromTo(
      '.contact',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 2 }
    );
  }, []);

  return (
    <div className='bg-d'>
  <NavigationBar />
  <div className='container'>
    <div id='home'>
      <Home />
    </div>
    <div id='about'>
      <About />
    </div>
    <div id='experience'>
      <Experience />
    </div>
    <div id='contact'>
      <Contact />
    </div>
  </div>
</div>

  );
};

export default App;
