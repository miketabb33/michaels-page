import { Rect } from './rectController'

export type RenderableObject = {
  rect: Rect
  color: string
}

export const renderer2dContext = () => {
  const renderObject = (renderableObject: RenderableObject, ctx: CanvasRenderingContext2D) => {
    const { width, height } = renderableObject.rect.size
    const { x, y } = renderableObject.rect.position

    ctx.fillStyle = renderableObject.color
    ctx.fillRect(x, y, width, height)
  }

  const clearCanvas = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
  }

  const render = (renderableObjects: RenderableObject[], canvas: HTMLCanvasElement | null) => {
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    clearCanvas(ctx, canvas)
    renderableObjects.forEach((renderableObject) => {
      renderObject(renderableObject, ctx)
    })
  }

  return { render }
}
