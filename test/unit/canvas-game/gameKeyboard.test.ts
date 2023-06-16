import { KeyboardCode } from '../../../src/canvas-game/types/KeyboardCode'
import { gameKeyboardController } from '../../../src/canvas-game/gameKeyboard'

describe('Game Keyboard Controller', () => {
  it('should toggle is pressing left on arrow left key', () => {
    const { isPressingLeftKey, onKeydown, onKeyup } = gameKeyboardController()
    expect(isPressingLeftKey()).toBe(false)

    onKeydown(KeyboardCode.ArrowLeft)
    expect(isPressingLeftKey()).toBe(true)

    onKeyup(KeyboardCode.ArrowLeft)
    expect(isPressingLeftKey()).toBe(false)
  })

  it('should toggle is pressing left on key a', () => {
    const { isPressingLeftKey, onKeydown, onKeyup } = gameKeyboardController()
    expect(isPressingLeftKey()).toBe(false)

    onKeydown(KeyboardCode.KeyA)
    expect(isPressingLeftKey()).toBe(true)

    onKeyup(KeyboardCode.KeyA)
    expect(isPressingLeftKey()).toBe(false)
  })

  it('should toggle is pressing right on arrow right key', () => {
    const { isPressingRightKey, onKeydown, onKeyup } = gameKeyboardController()
    expect(isPressingRightKey()).toBe(false)

    onKeydown(KeyboardCode.ArrowRight)
    expect(isPressingRightKey()).toBe(true)

    onKeyup(KeyboardCode.ArrowRight)
    expect(isPressingRightKey()).toBe(false)
  })

  it('should toggle is pressing right on key d', () => {
    const { isPressingRightKey, onKeydown, onKeyup } = gameKeyboardController()
    expect(isPressingRightKey()).toBe(false)

    onKeydown(KeyboardCode.KeyD)
    expect(isPressingRightKey()).toBe(true)

    onKeyup(KeyboardCode.KeyD)
    expect(isPressingRightKey()).toBe(false)
  })
})
