export const keyboardController = (e: KeyboardEvent) => {
  const isDKey = e.code === 'KeyD'
  const isArrowRightKey = e.code === 'ArrowRight'

  const isAKey = e.code === 'KeyA'
  const isArrowLeftKey = e.code === 'ArrowLeft'

  const isPressingLeft = isAKey || isArrowLeftKey
  const isPressingRight = isDKey || isArrowRightKey

  return {
    isPressingLeft,
    isPressingRight,
  }
}
