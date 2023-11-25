import React from 'react'
import TimerDisplayTTT from './TimerDisplayTTT'
// import TimerView from './timer-view'
// import TextDisplayView from './text-display-view'
// import topBarStyles from '../styles/TopBarStyles.module.css'

// interface InfoBarViewProps {
//   activePlayer: string
//   textDisplay: string
//   xRemainingTimeInHundredthsOfSeconds: number
//   oRemainingTimeInHundredthsOfSeconds: number
// }

const InfoBarTTT = () => {
  return (
    <>
      <TimerDisplayTTT marker="X" />
      <TimerDisplayTTT marker="O" />
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
