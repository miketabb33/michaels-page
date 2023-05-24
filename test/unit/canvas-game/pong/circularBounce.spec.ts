import { Rect } from '../../../../src/canvas-game/rect'
import {
  convertPercentageToDirection,
  horizontalRelativeCollisionPoint,
} from '../../../../src/canvas-game/pong/circularBounce'

describe('Convert Percentage To Direction', () => {
  it('should convert 50%', () => {
    const result = convertPercentageToDirection(0.5)
    expect(result).toEqual({ x: 0, y: -1 })
  })
  it('should convert 25%', () => {
    const result = convertPercentageToDirection(0.25)
    expect(result).toEqual({ x: -0.5, y: -0.5 })
  })
})

describe('Collision Point', () => {
  it('should return 0.5 when test is center with subject', () => {
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
    const result = horizontalRelativeCollisionPoint(subject, test)
    expect(result).toEqual(0.5)
  })

  it('should return 0.25 when test center is 25% to the left', () => {
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
    const result = horizontalRelativeCollisionPoint(subject, test)
    expect(result).toEqual(0.25)
  })

  it('should return 0.75 when test center is 75% to the left', () => {
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
    const result = horizontalRelativeCollisionPoint(subject, test)
    expect(result).toEqual(0.75)
  })
})
