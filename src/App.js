import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Feedback from './components/Feedback';
import Cta from './components/Cta';
import Footer from './components/Footer'
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Feedback />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
