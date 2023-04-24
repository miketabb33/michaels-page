import { Rect, collisionDetection, getRectEdges } from './rect'

describe('Get Rect Edges', () => {
  it('should get the edges of the rect', () => {
    const rect: Rect = {
      position: {
        x: 50,
        y: 80,
      },
      size: {
        width: 40,
        height: 30,
      },
    }

    const { top, right, bottom, left } = getRectEdges(rect)

    expect(top).toEqual(80)
    expect(right).toEqual(90)
    expect(bottom).toEqual(110)
    expect(left).toEqual(50)
  })
})

describe('Collision Detection', () => {
  it('should return true when the 2 rects intersect along y', () => {
    const rect1: Rect = {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 20,
        height: 20,
      },
    }

    const rect2: Rect = {
      position: {
        x: 0,
        y: 10,
      },
      size: {
        width: 20,
        height: 20,
      },
    }

    const result = collisionDetection(rect1, rect2)
    expect(result).toBe(true)
  })

  it('should return true when the 2 rects intersect along x', () => {
    const rect1: Rect = {
      position: {
        x: 10,
        y: 0,
      },
      size: {
        width: 20,
        height: 20,
      },
    }

    const rect2: Rect = {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 20,
        height: 20,
      },
    }

    const result = collisionDetection(rect1, rect2)
    expect(result).toBe(true)
  })

  it('should return false when the 2 rects do not intersect', () => {
    const rect1: Rect = {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 20,
        height: 20,
      },
    }

    const rect2: Rect = {
      position: {
        x: 50,
        y: 50,
      },
      size: {
        width: 20,
        height: 20,
      },
    }

    const result = collisionDetection(rect1, rect2)
    expect(result).toBe(false)
  })
})
