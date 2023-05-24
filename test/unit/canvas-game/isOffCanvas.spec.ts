import { isOffCanvas } from '../../../src/canvas-game/isOffCanvas'

const CANVAS_SIZE_MOCK = { width: 100, height: 100 }

describe('Is Off Canvas', () => {
  it('should return NONE when item is not off canvas', () => {
    const size = { width: 50, height: 50 }
    const position = { x: 10, y: 10 }

    const RECT_MOCK = { size, position }
    expect(isOffCanvas(RECT_MOCK, CANVAS_SIZE_MOCK)).toEqual('none')
  })
})
it('should return LEFT when item is off canvas left', () => {
  const size = { width: 50, height: 50 }
  const position = { x: -1, y: 10 }

  const RECT_MOCK = { size, position }
  expect(isOffCanvas(RECT_MOCK, CANVAS_SIZE_MOCK)).toEqual('left')
})
it('should return UP when item is off canvas up', () => {
  const size = { width: 50, height: 50 }
  const position = { x: 10, y: -1 }

  const RECT_MOCK = { size, position }
  expect(isOffCanvas(RECT_MOCK, CANVAS_SIZE_MOCK)).toEqual('up')
})
it('should return RIGHT when item is off canvas right', () => {
  const size = { width: 50, height: 50 }
  const position = { x: 51, y: 10 }

  const RECT_MOCK = { size, position }
  expect(isOffCanvas(RECT_MOCK, CANVAS_SIZE_MOCK)).toEqual('right')
})
it('should return DOWN when item is off canvas right', () => {
  const size = { width: 50, height: 50 }
  const position = { x: 10, y: 51 }

  const RECT_MOCK = { size, position }
  expect(isOffCanvas(RECT_MOCK, CANVAS_SIZE_MOCK)).toEqual('down')
})
