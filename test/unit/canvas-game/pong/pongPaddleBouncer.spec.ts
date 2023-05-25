import { calcRandom5 } from '../../../../src/canvas-game/pong/pongPaddleBouncer'

describe('Calc Random 5', () => {
  it('should return a negative Y when given a positive Y', () => {
    const result = calcRandom5(0.5)
    expect(result.y < 0).toBeTruthy()
  })

  it('should return a positive Y when given a negative Y', () => {
    const result = calcRandom5(-0.5)
    expect(result.y > 0).toBeTruthy()
  })
})
