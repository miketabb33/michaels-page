import { pongScore } from '../../../src/canvas-game/pongScore'

describe('Pong Score', () => {
  it('should start at 0', () => {
    const { scoreResult } = pongScore()
    expect(scoreResult.score).toEqual(0)
  })

  it('should increment and reset', () => {
    const { scoreResult, incrementScore, resetScore } = pongScore()
    incrementScore()
    expect(scoreResult.score).toEqual(1)
    incrementScore()
    expect(scoreResult.score).toEqual(2)
    resetScore()
    expect(scoreResult.score).toEqual(0)
  })
})
