import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PongPage from '../pages/PongPage'
import LandingPage from '../pages/LandingPage'
import ArticlePage from '../pages/ArticlePage'
import TicTacToePage from '../pages/TicTacToe/TicTacToePage'
import NotFoundPage from '../pages/NotFoundPage'
import TicTacToeRegularPage from '../pages/TicTacToe/TicTacToeRegularPage'
import TicTacToeTimedPage from '../pages/TicTacToe/TicTacToeTimedPage'
import TicTacToe3dPage from '../pages/TicTacToe/TicTacToe3dPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="pong" element={<PongPage />} />
        <Route path="tic-tac-toe">
          <Route index element={<TicTacToePage />} />
          <Route path="regular" element={<TicTacToeRegularPage />} />
          <Route path="timed" element={<TicTacToeTimedPage />} />
          <Route path="3d" element={<TicTacToe3dPage />} />
        </Route>
        <Route path="landing" element={<LandingPage />} />
        <Route path="article/:slug" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
