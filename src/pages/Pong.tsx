import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import PongView from '../components/PongView/PongView'
import PongBoardView from '../components/PongView/PongBoardView'

const Pong = () => {
  return (
    <NavLayout>
      <PongView />
      {/* <PongBoardView /> */}
    </NavLayout>
  )
}

export default Pong
