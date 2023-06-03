import { maxEdgeXFoBounce } from '../../../../src/canvas-game/pong/pongPaddleBouncer'

describe('Max Edge X For Bounce', () => {
  it('should return positive x value when max threshold is not reached', () => {
    const X = 0.6
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(X)
  })

  it('should return negative x value when max threshold is not reached', () => {
    const X = -0.6
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(X)
  })

  it('should return threshold value when X is BELOW max threshold', () => {
    const X = -0.9
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(-0.85)
  })

  it('should return threshold value when X is ABOVE max threshold', () => {
    const X = 0.9
    const MAX_THRESHOLD = 0.15

    const result = maxEdgeXFoBounce(X, MAX_THRESHOLD)
    expect(result).toEqual(0.85)
  })
})
