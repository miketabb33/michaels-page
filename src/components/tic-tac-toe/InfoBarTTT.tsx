import React from 'react'
import TimerDisplayTTT from './timer-display/TimerDisplayTTT'
import { OPlayer, XPlayer } from './player-ttt/PlayerTTT'
// import TimerView from './timer-view'
// import TextDisplayView from './text-display-view'
// import topBarStyles from '../styles/TopBarStyles.module.css'

// interface InfoBarViewProps {
//   activePlayer: string
//   textDisplay: string
//   xRemainingTimeInHundredthsOfSeconds: number
//   oRemainingTimeInHundredthsOfSeconds: number
// }

// const activePlayer = XPlayer
const activePlayer = OPlayer

const InfoBarTTT = () => {
  return (
    <>
      <TimerDisplayTTT player={XPlayer} activePlayer={activePlayer} remainingTimeInHundredthsOfSeconds={0} />
      <TimerDisplayTTT player={OPlayer} activePlayer={activePlayer} remainingTimeInHundredthsOfSeconds={300} />
    </>
    // <div className={topBarStyles.topBar}>
    //   <TimerView
    //     player={'x'}
    //     activePlayer={this.props.activePlayer}
    //     remainingTimeInHundredthsOfSeconds={this.props.xRemainingTimeInHundredthsOfSeconds}
    //   />
    //   <TextDisplayView value={this.props.textDisplay} />
    //   <TimerView
    //     player={'o'}
    //     activePlayer={this.props.activePlayer}
    //     remainingTimeInHundredthsOfSeconds={this.props.oRemainingTimeInHundredthsOfSeconds}
    //   />
    // </div>
  )
}

export default InfoBarTTT
