import { gameKeyboard } from '../../canvas-game/gameKeyboard'
import { Direction } from '../types/Direction'

export const pongPlayerActions = () => {
  const { isPressingLeftKey, isPressingRightKey } = gameKeyboard()

  let isPressingLeftButton = false
  let isPressingRightButton = false

  const setIsPressingLeftButton = (value: boolean) => (isPressingLeftButton = value)
  const setIsPressingRightButton = (value: boolean) => (isPressingRightButton = value)

  const detectPlayerControls = (): Direction => {
    if (isPressingLeftKey() || isPressingLeftButton) {
      return 'left'
    } else if (isPressingRightKey() || isPressingRightButton) {
      return 'right'
    } else {
      return 'none'
    }
  }

  return {
    setIsPressingLeftButton,
    setIsPressingRightButton,
    detectPlayerControls,
  }
}
