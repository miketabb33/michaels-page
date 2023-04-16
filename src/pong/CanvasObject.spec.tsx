import CanvasObject, { CanvasObjectType } from './CanvasObject'

const CANVAS_OBJECT_MOCK: CanvasObjectType = {
  rect: {
    size: { width: 50, height: 50 },
    position: {
      x: 100,
      y: 100,
    },
  },
  color: 'anyColor',
  speed: 10,
  direction: 'down',
}

describe('Use Canvas Object', () => {
  it('should return the initial object when nothing changed', () => {
    const { getCanvasObject } = CanvasObject(CANVAS_OBJECT_MOCK)
    expect(getCanvasObject()).toEqual(CANVAS_OBJECT_MOCK)
  })

  it('should return the an object with a new position when move right', () => {
    const { getCanvasObject, move } = CanvasObject(CANVAS_OBJECT_MOCK)
    const expectedResult = CANVAS_OBJECT_MOCK
    expectedResult.rect.position.x += expectedResult.speed

    move('right')
    expect(getCanvasObject()).toEqual(CANVAS_OBJECT_MOCK)
  })
})
