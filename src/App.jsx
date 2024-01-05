import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import NavBar from './components/NavBar'

function App() {
 
  return (
    <>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about-us" element={<About />} />
    <Route exact path="/services" element={<Services />} />
    <Route exact path="/contact-us" element={<Contact />} />
    <Route exact path="/faq" element={<Faq />} />
    <Route exact path="/blog" element={<Blog />} />
   </Routes>
   </>

  )
}

export default App
