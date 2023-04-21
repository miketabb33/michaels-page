import { makeCanvasObjectMock } from '../__MOCKS__/canvasType.mock'
import { canvasCollisionDetector } from './canvasCollisionDetector'
import { CanvasBinding } from './useCanvas'

describe('Canvas Collision Detector', () => {
  let CANVAS_BINDING_MOCK: CanvasBinding
  const canvasDimensionUnits = 1000

  beforeEach(() => {
    CANVAS_BINDING_MOCK = {
      getCanvas: () => null,
      getCanvasSizePixels: () => ({
        width: 100,
        height: 100,
      }),
    }
  })

  describe('Is Off Canvas', () => {
    it('should return NONE when item is not off canvas', () => {
      const { isOffCanvas } = canvasCollisionDetector(CANVAS_BINDING_MOCK, canvasDimensionUnits)
      const size = { width: 500, height: 500 }
      const position = { x: 200, y: 200 }

      const CANVAS_OBJECT_MOCK = makeCanvasObjectMock()
      CANVAS_OBJECT_MOCK.rect = { size, position }
      expect(isOffCanvas(CANVAS_OBJECT_MOCK)).toEqual('none')
    })
  })
  it('should return LEFT when item is off canvas left', () => {
    const { isOffCanvas } = canvasCollisionDetector(CANVAS_BINDING_MOCK, canvasDimensionUnits)
    const size = { width: 500, height: 500 }
    const position = { x: -1, y: 200 }

    const CANVAS_OBJECT_MOCK = makeCanvasObjectMock()
    CANVAS_OBJECT_MOCK.rect = { size, position }
    expect(isOffCanvas(CANVAS_OBJECT_MOCK)).toEqual('left')
  })
  it('should return UP when item is off canvas up', () => {
    const { isOffCanvas } = canvasCollisionDetector(CANVAS_BINDING_MOCK, canvasDimensionUnits)
    const size = { width: 500, height: 500 }
    const position = { x: 200, y: -1 }

    const CANVAS_OBJECT_MOCK = makeCanvasObjectMock()
    CANVAS_OBJECT_MOCK.rect = { size, position }
    expect(isOffCanvas(CANVAS_OBJECT_MOCK)).toEqual('up')
  })
  it('should return RIGHT when item is off canvas right', () => {
    const { isOffCanvas } = canvasCollisionDetector(CANVAS_BINDING_MOCK, canvasDimensionUnits)
    const size = { width: 500, height: 500 }
    const position = { x: 510, y: 200 }

    const CANVAS_OBJECT_MOCK = makeCanvasObjectMock()
    CANVAS_OBJECT_MOCK.rect = { size, position }
    expect(isOffCanvas(CANVAS_OBJECT_MOCK)).toEqual('right')
  })
  it('should return DOWN when item is off canvas right', () => {
    const { isOffCanvas } = canvasCollisionDetector(CANVAS_BINDING_MOCK, canvasDimensionUnits)
    const size = { width: 500, height: 500 }
    const position = { x: 510, y: 200 }

    const CANVAS_OBJECT_MOCK = makeCanvasObjectMock()
    CANVAS_OBJECT_MOCK.rect = { size, position }
    expect(isOffCanvas(CANVAS_OBJECT_MOCK)).toEqual('right')
  })
})
