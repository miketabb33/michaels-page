import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PongPage from '../pages/PongPage'
import LandingPage from '../pages/LandingPage'
import ArticlePage from '../pages/ArticlePage'
import TicTacToePage from '../pages/TicTacToePage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="pong" element={<PongPage />} />
        <Route path="tic-tac-toe" element={<TicTacToePage />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="article/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
