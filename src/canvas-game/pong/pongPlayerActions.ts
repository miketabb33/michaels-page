import { gameKeyboard } from '../../canvas-game/gameKeyboard'
import { PongController } from '../GameClickController'

import { Direction } from '../types/Direction'

export const pongPlayerActions = () => {
  const { isPressingLeftKey, isPressingRightKey } = gameKeyboard()

  const detectPlayerControls = (): Direction => {
    if (isPressingLeftKey() || PongController.isPressingLeft()) {
      return 'left'
    } else if (isPressingRightKey() || PongController.isPressingRight()) {
      return 'right'
    } else {
      return 'none'
    }
  }

  return {
    detectPlayerControls,
  }
}
