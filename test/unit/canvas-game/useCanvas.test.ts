import { renderHook } from '@testing-library/react'
import { useCanvasController } from '../../../src/canvas-game/useCanvas'
import React from 'react'
import { translateRect } from '../../../src/canvas-game/relativeCanvas'
import { Rect } from '../../../src/canvas-game/rect'
import { isOffCanvas } from '../../../src/canvas-game/isOffCanvas'
import { makeCanvasObjectMock } from '../__MOCKS__/canvasObject.mock'
import { RenderableObject, render2dContext } from '../../../src/canvas-game/render2dContext'

jest.mock('../../../src/canvas-game/relativeCanvas')
jest.mock('../../../src/canvas-game/isOffCanvas')
jest.mock('../../../src/canvas-game/render2dContext')

const TRANSLATE_RECT = translateRect as jest.Mock
const IS_OFF_CANVAS = isOffCanvas as jest.Mock
const RENDER_2D_CONTEXT = render2dContext as jest.Mock

beforeEach(jest.clearAllMocks)

describe('Use Canvas Controller', () => {
  it('should return init values', () => {
    const { result } = renderHook(() => useCanvasController({ units: 1000, sizeMultiplier: 0.8 }))
    expect(result.current.canvasRef.current).toBeNull()
    expect(result.current.canvasWidth).toEqual(0)
  })

  it('Is Rect Off Canvas', () => {
    TRANSLATE_RECT.mockImplementationOnce(() => 'TRANSLATE_RECT_MOCK')
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { clientWidth: 444, clientHight: 555 } })
    const { result } = renderHook(() => useCanvasController({ units: 1000, sizeMultiplier: 0.8 }))
    result.current.isRectOffCanvas({} as Rect)
    expect(TRANSLATE_RECT).toHaveBeenCalled()
    expect(IS_OFF_CANVAS).toHaveBeenCalledWith('TRANSLATE_RECT_MOCK', { height: 444, width: 444 })
  })

  it('Translate Canvas Obj To Renderable Obj', () => {
    const CANVAS_OBJ = makeCanvasObjectMock()
    const { result } = renderHook(() => useCanvasController({ units: 1000, sizeMultiplier: 0.8 }))
    const renderableObj = result.current.translateCanvasObjToRenderableObj([CANVAS_OBJ])
    expect(renderableObj).toEqual([
      { color: '', rect: { position: { x: 0, y: 0 }, size: { height: 0, width: 0 } }, shape: 'circle' },
    ])
  })

  it('draw', () => {
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
    TRANSLATE_RECT.mockImplementationOnce(() => 'TRANSLATE_RECT_MOCK')
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: 'REF_MOCK' })
    const { result } = renderHook(() => useCanvasController({ units: 1000, sizeMultiplier: 0.8 }))
    result.current.draw([RENDERABLE_OBJECT])
    expect(RENDER_2D_CONTEXT).toHaveBeenCalledWith(
      [{ color: '', rect: 'TRANSLATE_RECT_MOCK', shape: 'rectangle' }],
      'REF_MOCK'
    )
  })
})
