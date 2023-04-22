import { makeCanvasObjectMock } from '../__MOCKS__/canvasType.mock'
import canvasObject, { CanvasObject } from './canvasObjectController'

describe('Use Canvas Object', () => {
  it('should return the initial object when nothing changed', () => {
    const CANVAS_OBJECT_MOCK = makeCanvasObjectMock()
    const { getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
    expect(getCanvasObject()).toEqual(CANVAS_OBJECT_MOCK)
  })

  describe('Add Velocity', () => {
    let CANVAS_OBJECT_MOCK: CanvasObject

    beforeEach(() => {
      CANVAS_OBJECT_MOCK = makeCanvasObjectMock()
      CANVAS_OBJECT_MOCK.rect.position = { x: 100, y: 100 }
    })

    it('should move UP by speed value when given x: 0 and y: -1', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: 0, y: -1, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 100, y: 90 })
    })
    it('should move RIGHT by speed when given x: 1 and y: 0', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: 1, y: 0, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 110, y: 100 })
    })
    it('should move DOWN by speed value when given x: 0 and y: 1', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: 0, y: 1, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 100, y: 110 })
    })
    it('should move LEFT by speed when given x: -1 and y: 0', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: -1, y: 0, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 90, y: 100 })
    })
    it('should move UP RIGHT by speed when given x: 0.5 and y: -0.5', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: 0.5, y: -0.5, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 105, y: 95 })
    })
    it('should move DOWN RIGHT by speed when given x: 0.5 and y: 0.5', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: 0.5, y: 0.5, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 105, y: 105 })
    })
    it('should move DOWN LEFT by speed when given x: -0.5 and y: 0.5', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: -0.5, y: 0.5, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 95, y: 105 })
    })
    it('should move UP LEFT by speed when given x: -0.5 and y: -0.5', () => {
      const { addVelocity, getCanvasObject } = canvasObject(CANVAS_OBJECT_MOCK)
      addVelocity({ x: -0.5, y: -0.5, speed: 10 })
      expect(getCanvasObject().rect.position).toEqual({ x: 95, y: 95 })
    })
  })
})
