import { getCanvasSize } from './canvas'

describe('Canvas', () => {
  it('should get canvas size for any given size', () => {
    const height = 100
    const width = 200
    const result = getCanvasSize({ height, width })
    expect(result).toEqual(90)
  })

  it('should get canvas size for any given size', () => {
    const height = 150
    const width = 120
    const result = getCanvasSize({ height, width })
    expect(result).toEqual(108)
  })
})
