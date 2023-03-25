import { Rect } from '../types/Rect'
import { Size } from '../types/Size'
import { translateCanvas, translateRect } from './canvas'

describe('Canvas', () => {
  describe('Translate Canvas', () => {
    it('should get canvas size for any given size', () => {
      const height = 100
      const width = 200
      const result = translateCanvas({ height, width })
      expect(result).toEqual(80)
    })

    it('should get canvas size for any given size', () => {
      const height = 150
      const width = 120
      const result = translateCanvas({ height, width })
      expect(result).toEqual(96)
    })
  })

  describe('Translate Rect', () => {
    it('should resize the rect to be relative to the canvas', () => {
      const rect: Rect = {
        size: {
          width: 100,
          height: 100,
        },
        position: {
          x: 300,
          y: 200,
        },
      }

      const canvasSize: Size = { width: 2230, height: 2230 }

      const expectedResult: Rect = {
        size: {
          width: 223,
          height: 223,
        },
        position: {
          x: 669,
          y: 446,
        },
      }

      const result = translateRect(rect, canvasSize, 1000)
      expect(result).toEqual(expectedResult)
    })
  })
})
