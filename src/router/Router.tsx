import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import PongPageContainer from '../pages/Pong'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pong" element={<PongPageContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
