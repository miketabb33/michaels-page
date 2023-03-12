import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Pong from './pages/Pong'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pong" element={<Pong />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
