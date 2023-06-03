import { Rect } from '../../../../src/canvas-game/rect'
import { calcNewXBasedOnCollision } from '../../../../src/canvas-game/pong/calcNewXBasedOnCollision'

describe('Calc New X Based On Collision', () => {
  it('should return X as 0 when test is center with subject', () => {
    const subject: Rect = {
      position: {
        x: 4,
        y: 0,
      },
      size: {
        width: 8,
        height: 0,
      },
    }

    const test: Rect = {
      position: {
        x: 6,
        y: 0,
      },
      size: {
        width: 4,
        height: 0,
      },
    }
    const result = calcNewXBasedOnCollision({ subject, test })
    expect(result).toEqual(0)
  })

  it('should return x as -0.5 when test center is 25% to the right of subject', () => {
    const subject: Rect = {
      position: {
        x: 4,
        y: 0,
      },
      size: {
        width: 8,
        height: 0,
      },
    }

    const test: Rect = {
      position: {
        x: 4,
        y: 0,
      },
      size: {
        width: 4,
        height: 0,
      },
    }
    const result = calcNewXBasedOnCollision({ subject, test })
    expect(result).toEqual(-0.5)
  })

  it('should return X as 0.5 when test center is 75% to the right of subject', () => {
    const subject: Rect = {
      position: {
        x: 4,
        y: 0,
      },
      size: {
        width: 8,
        height: 0,
      },
    }

    const test: Rect = {
      position: {
        x: 8,
        y: 0,
      },
      size: {
        width: 4,
        height: 0,
      },
    }
    const result = calcNewXBasedOnCollision({ subject, test })
    expect(result).toEqual(0.5)
  })
})
