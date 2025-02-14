import React from 'react'
import './App.css'
import Navbar from './pages/Navbar/Navbar'
import HeroSection from './pages/HeroSection/HeroSection'
import Services from './pages/Services/Services'
import About from './pages/About/About'
import ContactForm from './pages/ContactForm/ContactForm'
import Footer from './pages/Footer/Footer'


function App() {

  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Services />
        <About />
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App
