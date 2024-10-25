import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import About from './pages/About'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  )
}
