import { CanvasObjectShape } from './canvasObjectController'
import { Rect } from './rect'

export type RenderableObject = {
  rect: Rect
  color: string
  shape: CanvasObjectShape
}

const renderObject = (renderableObject: RenderableObject, ctx: CanvasRenderingContext2D) => {
  const { width, height } = renderableObject.rect.size
  const { x, y } = renderableObject.rect.position

  ctx.fillStyle = renderableObject.color

  if (renderableObject.shape === 'rectangle') {
    ctx.fillRect(x, y, width, height)
  }

  if (renderableObject.shape === 'circle') {
    ctx.beginPath()
    const radius = width / 2
    const ax = x + radius
    const ay = y + height / 2
    ctx.arc(ax, ay, radius, 0, 2 * Math.PI)
    ctx.fill()
  }
}

const clearCanvas = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}

export const render2dContext = (renderableObjects: RenderableObject[], canvas: HTMLCanvasElement | null) => {
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  clearCanvas(ctx, canvas)
  renderableObjects.forEach((renderableObject) => {
    renderObject(renderableObject, ctx)
  })
}
