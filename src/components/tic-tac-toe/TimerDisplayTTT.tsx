import React from 'react'
import PlayerMarkerTTT, { MarkerColor, MarkerTTT } from './PlayerMarkerTTT'
import styled, { css } from 'styled-components'
// import PlayerMarkerImage from '../images/player-marker-image'
// import topBarStyles from '../styles/TopBarStyles.module.css'

type StyledTimerDisplayProps = {
  $marker: MarkerTTT
  $isActive: boolean
}

const X_COLOR = '#1FA889'
const O_COLOR = '#61C278'

const TimerDisplay = styled.div<StyledTimerDisplayProps>`
  display: flex;
  gap: 1.5rem;

  padding: 0.2rem 2.2rem;
  background: #484848;
  border: 0.4rem solid #2d2d2d;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 3rem;
  font-size: 2em;

  ${({ $marker }) => css`
    ${$marker === 'X' &&
    css`
      border-color: ${X_COLOR};
    `}

    ${$marker === 'O' &&
    css`
      border-color: ${O_COLOR};
    `}
  `}
`

// interface TimerViewProps {
//   remainingTimeInHundredthsOfSeconds: number
//   player: string
//   activePlayer: string
// }

type TimerDisplayTTTProps = {
  marker: MarkerTTT
}

const TimerDisplayTTT = ({ marker }: TimerDisplayTTTProps) => {
  const playerColor: MarkerColor = marker === 'X' ? 'teal' : 'green'
  return (
    <TimerDisplay $marker={marker} $isActive={false}>
      <PlayerMarkerTTT marker={marker} color={playerColor} size={25} location={'timer-view'} />
      <p>00:10.00</p>
    </TimerDisplay>
  )
}

export default TimerDisplayTTT

// export default class TimerView extends React.Component<TimerViewProps, {}> {
//   imageSize = 25
//   playerMarkerImage = new PlayerMarkerImage

//   #xPlayer = 'x'
//   #oPlayer = 'o'

//   render() {
//     if (this.props.remainingTimeInHundredthsOfSeconds <= 0) {
//       return this.renderTimerView('red'+ this.props.player, topBarStyles.timerViewNoTimeLeft, topBarStyles.timerViewTextNoTimeLeft)
//     } else {
//       return this.renderTimerView(this.props.player, this.getActiveState(), this.getPlayerStyle())
//     }
//   }

//   renderTimerView(imageName: string, viewStyle: string, textStyle: string) {
//     return (
//       <div className={ `${topBarStyles.timerView} ${viewStyle}` }>
//         <div className={topBarStyles.timerViewImage}>
//           { this.playerMarkerImage.get(imageName, this.imageSize, "timer-view") }
//         </div>
//         <div className={ `${topBarStyles.timerViewText} ${textStyle} `} id = { imageName + "-player-remaining-time" }>
//           { this.formatTime(this.props.remainingTimeInHundredthsOfSeconds) }
//         </div>
//       </div>
//     )
//   }

//   getActiveState() {
//     if (this.props.activePlayer == this.props.player && this.props.player == this.#xPlayer) {
//       return topBarStyles.timerViewActiveX
//     } else if (this.props.activePlayer == this.props.player && this.props.player == this.#oPlayer){
//       return topBarStyles.timerViewActiveO
//     } else {
//       return topBarStyles.timerViewInactive
//     }
//   }

//   getPlayerStyle() {
//     if (this.props.player == this.#xPlayer) {
//       return topBarStyles.timerViewX
//     } else {
//       return topBarStyles.timerViewO
//     }
//   }

//   formatTime(timeInHundredthsOfSeconds: number) {
//     if (timeInHundredthsOfSeconds <= 0) {
//       return this.get0TimeFormat()
//     } else {
//       return this.getOver0TimeFormat(timeInHundredthsOfSeconds)
//     }
//   }

//   addPrefixWhenNeeded(time: string) {
//     if (time.length == 2) {
//       return time
//     } else if (time.length == 1) {
//       return "0" + time
//     } else if (time.length == 0) {
//       return "00"
//     } else {
//       return '++'
//     }
//   }

//   get0TimeFormat() {
//     return '00:00.00'
//   }

//   getOver0TimeFormat(timeInHundredthsOfSeconds: number) {
//     const stringifiedTimeInHundredthsOfSeconds = timeInHundredthsOfSeconds.toString()
//     const timeRemovedHundredthsOfSeconds = parseInt(stringifiedTimeInHundredthsOfSeconds.substring(0, stringifiedTimeInHundredthsOfSeconds.length - 2))

//     const minutes = Math.floor(timeRemovedHundredthsOfSeconds / 60)
//     const conditionedMinutes = isNaN(minutes) ? 0 : minutes

//     const conditionedSeconds = isNaN(timeRemovedHundredthsOfSeconds) ? 0 : timeRemovedHundredthsOfSeconds

//     const stringifiedSeconds = (conditionedSeconds % 60).toString()
//     const stringifiedMinutes = conditionedMinutes.toString()

//     const conditionedHundredthsOfSeconds = stringifiedTimeInHundredthsOfSeconds.substring(stringifiedTimeInHundredthsOfSeconds.length - 2, stringifiedTimeInHundredthsOfSeconds.length)

//     const formattedMinutes = this.addPrefixWhenNeeded(stringifiedMinutes)
//     const formattedSeconds = this.addPrefixWhenNeeded(stringifiedSeconds)
//     const formattedHundredthOfSeconds = this.addPrefixWhenNeeded(conditionedHundredthsOfSeconds)

//     const formattedTime = `${formattedMinutes}:${formattedSeconds}.${formattedHundredthOfSeconds}`

//     return formattedTime
//   }
// }
