import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PongPage from '../pages/PongPage'
import LandingPage from '../pages/LandingPage'
import ArticlePage from '../pages/ArticlePage'
import TicTacToeMenuPage from '../pages/TicTacToe/TicTacToeMenuPage'
import NotFoundPage from '../pages/NotFoundPage'
import TicTacToeRegularPage from '../pages/TicTacToe/TicTacToeRegularPage'
import TicTacToeTimedPage from '../pages/TicTacToe/TicTacToeTimedPage'
import TicTacToe3dPage from '../pages/TicTacToe/TicTacToe3dPage'
import RecommendedBooksPage from '../pages/RecommendedBooksPage'
import MyTradingCardWorthPage from '../pages/MyTradingCardWorthPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="pong" element={<PongPage />} />
        <Route path="tic-tac-toe">
          <Route index element={<TicTacToeMenuPage />} />
          <Route path="regular" element={<TicTacToeRegularPage />} />
          <Route path="timed" element={<TicTacToeTimedPage />} />
          <Route path="3d" element={<TicTacToe3dPage />} />
        </Route>
        <Route path="landing" element={<LandingPage />} />
        <Route path="my-trading-card-worth" element={<MyTradingCardWorthPage />} />
        <Route path="article/:slug" element={<ArticlePage />} />
        <Route path="recommended-books" element={<RecommendedBooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
