import { getUserPaddleDirection } from '../../../../src/canvas-game/pong/getUserPaddleDirection'

describe('Get User Paddle Direction', () => {
  it('should return left direction when not off canvas', () => {
    const result = getUserPaddleDirection({ direction: 'left', isPlayerOffCanvas: 'none' })
    expect(result).toEqual({ x: -1, y: 0 })
  })
  it('should NOT return left direction when IS off canvas left', () => {
    const result = getUserPaddleDirection({ direction: 'left', isPlayerOffCanvas: 'left' })
    expect(result).toEqual({ x: 0, y: 0 })
  })
  it('should return right direction when not off canvas', () => {
    const result = getUserPaddleDirection({ direction: 'right', isPlayerOffCanvas: 'none' })
    expect(result).toEqual({ x: 1, y: 0 })
  })
  it('should NOT return right direction when IS off canvas right', () => {
    const result = getUserPaddleDirection({ direction: 'right', isPlayerOffCanvas: 'right' })
    expect(result).toEqual({ x: 0, y: 0 })
  })
  it('should NOT return direction when given direction', () => {
    const result = getUserPaddleDirection({ direction: 'none', isPlayerOffCanvas: 'none' })
    expect(result).toEqual({ x: 0, y: 0 })
  })
})
