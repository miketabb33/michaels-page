import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import PongBoardView from '../components/pong-view/PongBoardView'

const PongPage = () => {
  return (
    <NavLayout>
      <PongBoardView />
    </NavLayout>
  )
}

export default PongPage
