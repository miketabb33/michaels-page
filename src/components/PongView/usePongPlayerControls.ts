import { useGameKeyboard } from '../../canvas-game/useGameKeyboard'
import { Direction } from '../../types/Direction'

export const usePongPlayerControls = () => {
  const { isPressingLeftKey, isPressingRightKey } = useGameKeyboard()

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

  return { setIsPressingLeftButton, setIsPressingRightButton, detectPlayerControls }
}
