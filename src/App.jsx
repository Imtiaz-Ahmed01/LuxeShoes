import React from 'react'
import Navbar from './components/Navbar'
import { Router } from 'react-router-dom'
import Routing from './Router/Routing'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routing />
      <Footer />
    </div>
  )
}

export default App