import { KeyboardListener } from './KeyboardEventListener'
import { KeyboardCode } from './types/KeyboardCode'

export const gameKeyboard = () => {
  const { isPressingLeftKey, isPressingRightKey, onKeydown, onKeyup } = gameKeyboardController()

  const keydownListener = (e: KeyboardEvent) => onKeydown(e.code)
  const keyupListener = (e: KeyboardEvent) => onKeyup(e.code)

  KeyboardListener.addListener('keydown', keydownListener)
  KeyboardListener.addListener('keyup', keyupListener)

  return {
    isPressingLeftKey,
    isPressingRightKey,
  }
}

export const gameKeyboardController = () => {
  let isPressingLeft = false
  let isPressingRight = false

  const isPressingLeftKey = () => isPressingLeft
  const isPressingRightKey = () => isPressingRight

  const onKeydown = (keyboardCode: string) => {
    const result = detectKey(keyboardCode)
    if (result.isDetectingLeft) isPressingLeft = true
    if (result.isDetectingRight) isPressingRight = true
  }

  const onKeyup = (keyboardCode: string) => {
    const result = detectKey(keyboardCode)
    if (result.isDetectingLeft) isPressingLeft = false
    if (result.isDetectingRight) isPressingRight = false
  }

  const detectKey = (keyboardCode: string) => {
    const isDKey = keyboardCode === KeyboardCode.KeyD
    const isArrowRightKey = keyboardCode === KeyboardCode.ArrowRight

    const isAKey = keyboardCode === KeyboardCode.KeyA
    const isArrowLeftKey = keyboardCode === KeyboardCode.ArrowLeft

    const isDetectingLeft = isAKey || isArrowLeftKey
    const isDetectingRight = isDKey || isArrowRightKey

    return {
      isDetectingLeft: isDetectingLeft,
      isDetectingRight: isDetectingRight,
    }
  }

  return { onKeydown, onKeyup, isPressingLeftKey, isPressingRightKey }
}
