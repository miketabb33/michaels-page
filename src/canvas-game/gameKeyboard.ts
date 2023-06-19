import { KeyboardCode } from './types/KeyboardCode'
import { removeListenersArray } from './removeListenersArray'

export const gameKeyboard = () => {
  const { isPressingLeftKey, isPressingRightKey, onKeydown, onKeyup } = gameKeyboardController()

  const keydownListener = (e: Event) => onKeydown((e as KeyboardEvent).code)
  const keyupListener = (e: Event) => onKeyup((e as KeyboardEvent).code)

  const addEventListeners = () => {
    addEventListener('keydown', keydownListener)
    addEventListener('keyup', keyupListener)
  }

  const removeEventListeners = () => {
    removeEventListener('keydown', keydownListener)
    removeEventListener('keyup', keyupListener)
  }

  addEventListeners()
  removeListenersArray.push(removeEventListeners)

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
