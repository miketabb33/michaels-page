import { CanvasObject } from '../types/CanvasObject'
import { Rect } from '../types/Rect'
import { Size } from '../types/Size'
import { translateRect } from './relativeCanvas'

class GameCanvas {
  private readonly canvas: HTMLCanvasElement
  private readonly canvasUnits: number

  private ctx = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.canvas.getContext('2d')!
  }

  private canvasSize = (): Size => {
    return { width: this.canvas.width, height: this.canvas.height }
  }

  constructor(canvas: HTMLCanvasElement, units: number) {
    this.canvas = canvas
    this.canvasUnits = units
  }

  setCanvasSize = (size: Size) => {
    this.canvas.width = size.width
    this.canvas.height = size.height
  }
  moveUpUnlessOffCanvas = (object: CanvasObject) => {
    if (this.isOffCanvasUp(object.rect)) return false
    this.moveUp(object)
    return true
  }

  moveDownUnlessOffCanvas = (object: CanvasObject) => {
    if (this.isOffCanvasDown(object.rect)) return false
    this.moveDown(object)
    return true
  }

  moveRightUnlessOffCanvas = (object: CanvasObject) => {
    if (this.isOffCanvasRight(object.rect)) return false
    this.moveRight(object)
    return true
  }

  moveLeftUnlessOffCanvas = (object: CanvasObject) => {
    if (this.isOffCanvasLeft(object.rect)) return false
    this.moveLeft(object)
    return true
  }

  moveUp = (object: CanvasObject) => {
    this.move(object, () => (object.rect.position.y -= object.speed))
  }

  moveDown = (object: CanvasObject) => {
    this.move(object, () => (object.rect.position.y += object.speed))
  }

  moveRight = (object: CanvasObject) => {
    this.move(object, () => (object.rect.position.x += object.speed))
  }

  moveLeft = (object: CanvasObject) => {
    this.move(object, () => (object.rect.position.x -= object.speed))
  }

  private move = (object: CanvasObject, action: () => void) => {
    this.clearRect(object.rect)
    action()
    this.renderRect(object.rect, object.color)
  }

  renderRect = (rect: Rect, color: string) => {
    const translatedRect = translateRect(
      rect,
      this.canvasSize(),
      this.canvasUnits
    )
    const { width, height } = translatedRect.size
    const { x, y } = translatedRect.position

    this.ctx().fillStyle = color
    this.ctx().fillRect(x, y, width, height)
  }

  private isOffCanvasUp = (rect: Rect): boolean => {
    if (rect.position.y < 0) return true
    return false
  }

  private isOffCanvasLeft = (rect: Rect): boolean => {
    if (rect.position.x < 0) return true
    return false
  }

  private isOffCanvasRight = (rect: Rect): boolean => {
    const translatedRect = translateRect(
      rect,
      this.canvasSize(),
      this.canvasUnits
    )
    const { width } = translatedRect.size
    const { x } = translatedRect.position

    const rightSidePosition = x + width

    if (rightSidePosition > this.canvasSize().width) return true
    return false
  }

  private isOffCanvasDown = (rect: Rect): boolean => {
    const translatedRect = translateRect(
      rect,
      this.canvasSize(),
      this.canvasUnits
    )
    const { height } = translatedRect.size
    const { y } = translatedRect.position

    const bottomSidePosition = y + height

    if (bottomSidePosition > this.canvasSize().height) return true
    return false
  }

  private clearRect = (rect: Rect) => {
    const translatedRect = translateRect(
      rect,
      this.canvasSize(),
      this.canvasUnits
    )
    const { width, height } = translatedRect.size
    const { x, y } = translatedRect.position
    this.ctx().clearRect(x - 1, y - 1, width + 2, height + 2)
  }
}

export default GameCanvas
