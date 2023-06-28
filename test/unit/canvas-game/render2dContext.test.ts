import { RenderableObject, render2dContext } from '../../../src/canvas-game/render2dContext'

const CLEAR_RECT = jest.fn()
const FILL_RECT = jest.fn()
const BEGIN_PATH = jest.fn()
const ARC = jest.fn()
const FILL = jest.fn()
const STROKE = jest.fn()

const CLIENT_WIDTH = 150
const CLIENT_HEIGHT = 100

beforeEach(jest.clearAllMocks)

describe('Render 2d Context', () => {
  it('should clear canvas', () => {
    const RENDERABLE_OBJECT: RenderableObject = {
      rect: {
        position: {
          x: 0,
          y: 0,
        },
        size: {
          width: 0,
          height: 0,
        },
      },
      color: '',
      shape: 'rectangle',
    }
    render2dContext([RENDERABLE_OBJECT], canvas)
    expect(CLEAR_RECT).toBeCalledWith(0, 0, CLIENT_WIDTH, CLIENT_HEIGHT)
  })
  it('should render rectangle', () => {
    const RECTANGLE: RenderableObject = {
      rect: {
        position: {
          x: 75,
          y: 100,
        },
        size: {
          width: 125,
          height: 150,
        },
      },
      color: '',
      shape: 'rectangle',
    }
    render2dContext([RECTANGLE], canvas)
    expect(FILL_RECT).toBeCalledWith(75, 100, 125, 150)
  })
  it('should render circle', () => {
    const RECTANGLE: RenderableObject = {
      rect: {
        position: {
          x: 10,
          y: 20,
        },
        size: {
          width: 30,
          height: 40,
        },
      },
      color: '',
      shape: 'circle',
    }
    render2dContext([RECTANGLE], canvas)
    expect(BEGIN_PATH).toBeCalledWith()
    expect(ARC).toHaveBeenCalledWith(25, 40, 15, 0, 6.283185307179586)
    expect(FILL).toHaveBeenCalled()
  })
  it('should render circle', () => {
    const RECTANGLE: RenderableObject = {
      rect: {
        position: {
          x: 20,
          y: 40,
        },
        size: {
          width: 50,
          height: 80,
        },
      },
      color: '',
      shape: 'circle-outline',
    }
    render2dContext([RECTANGLE], canvas)
    expect(BEGIN_PATH).toBeCalledWith()
    expect(ARC).toHaveBeenCalledWith(45, 80, 25, 0, 6.283185307179586)
    expect(STROKE).toHaveBeenCalled()
  })
})

const canvas = {
  getContext: () => context,
  clientWidth: CLIENT_WIDTH,
  clientHeight: CLIENT_HEIGHT,
} as unknown as HTMLCanvasElement

const context = {
  fillStyle: '',
  strikeStyle: '',
  clearRect: CLEAR_RECT,
  fillRect: FILL_RECT,
  beginPath: BEGIN_PATH,
  arc: ARC,
  fill: FILL,
  stroke: STROKE,
} as unknown as CanvasRenderingContext2D
