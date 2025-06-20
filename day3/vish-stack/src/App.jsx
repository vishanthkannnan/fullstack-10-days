import { useState } from 'react'

import Welcome from './Welcome'
import Skills from './skills' 
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Service'
import About from './pages/About'

//import './App.css'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/about' element={<About/>} />
   
    </Routes>

      
    </>
  )
}

export default App