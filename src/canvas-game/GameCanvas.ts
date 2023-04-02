import { CanvasObject } from '../types/CanvasObject'
import { Direction } from '../types/Direction'
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

  private getEdges = (rect: Rect) => {
    const top = rect.position.y
    const right = rect.position.x + rect.size.width
    const bottom = rect.position.y + rect.size.height
    const left = rect.position.x
    return { top, right, bottom, left }
  }

  collisionDetection = (rect1: Rect, rect2: Rect): boolean => {
    const { top: top1, right: right1, bottom: bottom1, left: left1 } = this.getEdges(rect1)
    const { top: top2, right: right2, bottom: bottom2, left: left2 } = this.getEdges(rect2)

    const isIntersectingAlongX = top1 < bottom2 && bottom1 > top2
    const isIntersectingAlongY = right1 > left2 && left1 < right2
    if (isIntersectingAlongY && isIntersectingAlongX) return true

    return false
  }

  setCanvasSize = (size: Size) => {
    this.canvas.width = size.width
    this.canvas.height = size.height
  }

  moveRectUnlessOffCanvas = (object: CanvasObject, direction: Direction): Direction => {
    if (direction === 'left' || direction === 'up left' || direction === 'down left') {
      if (this.isOffCanvasLeft(object.rect)) return 'left'
    }
    if (direction === 'right' || direction === 'up right' || direction === 'down right') {
      if (this.isOffCanvasRight(object.rect)) return 'right'
    }
    if (direction === 'down' || direction === 'down left' || direction === 'down right') {
      if (this.isOffCanvasDown(object.rect)) return 'down'
    }
    if (direction === 'up' || direction === 'up left' || direction === 'up right') {
      if (this.isOffCanvasUp(object.rect)) return 'up'
    }
    this.moveRect(object, direction)
    return 'none'
  }

  moveRect = (object: CanvasObject, direction: Direction) => {
    switch (direction) {
      case 'up':
        this.moveUp(object, object.speed)
        break
      case 'down':
        this.moveDown(object, object.speed)
        break
      case 'left':
        this.moveLeft(object, object.speed)
        break
      case 'right':
        this.moveRight(object, object.speed)
        break
      case 'up left':
        this.moveUp(object, object.speed / 2)
        this.moveLeft(object, object.speed / 2)
        break
      case 'up right':
        this.moveUp(object, object.speed / 2)
        this.moveRight(object, object.speed / 2)
        break
      case 'down left':
        this.moveDown(object, object.speed / 2)
        this.moveLeft(object, object.speed / 2)
        break
      case 'down right':
        this.moveDown(object, object.speed / 2)
        this.moveRight(object, object.speed / 2)
        break
      case 'none':
        break
    }
  }

  private moveUp = (object: CanvasObject, speed: number) => {
    object.rect.position.y -= speed
  }

  private moveDown = (object: CanvasObject, speed: number) => {
    object.rect.position.y += speed
  }

  private moveRight = (object: CanvasObject, speed: number) => {
    object.rect.position.x += speed
  }

  private moveLeft = (object: CanvasObject, speed: number) => {
    object.rect.position.x -= speed
  }

  renderRect = (rect: Rect, color: string) => {
    const translatedRect = translateRect(rect, this.canvasSize(), this.canvasUnits)
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
    const translatedRect = translateRect(rect, this.canvasSize(), this.canvasUnits)
    const { right } = this.getEdges(translatedRect)
    if (right > this.canvasSize().width) return true
    return false
  }

  private isOffCanvasDown = (rect: Rect): boolean => {
    const translatedRect = translateRect(rect, this.canvasSize(), this.canvasUnits)
    const { bottom } = this.getEdges(translatedRect)
    if (bottom > this.canvasSize().height) return true
    return false
  }

  clearCanvas = () => {
    this.ctx().clearRect(0, 0, this.canvasSize().width, this.canvasSize().height)
  }
}

export default GameCanvas
