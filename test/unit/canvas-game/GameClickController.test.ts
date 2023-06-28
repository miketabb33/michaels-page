import { GameClickController } from '../../../src/canvas-game/GameClickController'

describe('Game Click Controller', () => {
  it('should press left', () => {
    const subject = new GameClickController()
    expect(subject.isPressingLeft()).toBe(false)
    subject.leftPressStarted()
    expect(subject.isPressingLeft()).toBe(true)
    subject.leftPressEnded()
    expect(subject.isPressingLeft()).toBe(false)
  })
  it('should press right', () => {
    const subject = new GameClickController()
    expect(subject.isPressingRight()).toBe(false)
    subject.rightPressStarted()
    expect(subject.isPressingRight()).toBe(true)
    subject.rightPressEnded()
    expect(subject.isPressingRight()).toBe(false)
  })
})
