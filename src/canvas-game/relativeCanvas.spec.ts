import { Size } from '../types/Size'
import { Rect } from './rect'
import { calcSquareCanvasSize, translateRect } from './relativeCanvas'

describe('Translate Rect', () => {
  it('should translate the rect into the true pixel size of the canvas', () => {
    const RECT_MOCK: Rect = {
      position: {
        x: 100,
        y: 200,
      },
      size: {
        width: 55,
        height: 40,
      },
    }

    const CANVAS_SIZE_MOCK = {
      width: 400,
      height: 400,
    }

    const result = translateRect(RECT_MOCK, CANVAS_SIZE_MOCK, 1000)
    const expectedResult = { position: { x: 40, y: 80 }, size: { height: 16, width: 22 } }
    expect(result).toEqual(expectedResult)
  })
})

describe('Calc Square Canvas Size', () => {
  it('should calc square based on height when its smallest size, then reduce size', () => {
    const parentSize: Size = { width: 957, height: 542 }
    const result = calcSquareCanvasSize(parentSize, 0.8)
    expect(result).toEqual({ width: 433.6, height: 433.6 })
  })

  it('should calc square based on height when its smallest size, then reduce size', () => {
    const parentSize: Size = { width: 368, height: 812 }
    const result = calcSquareCanvasSize(parentSize, 0.75)
    expect(result).toEqual({ width: 276, height: 276 })
  })
})
