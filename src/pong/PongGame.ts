import { Rect } from '../types/Rect'
import { Size } from '../types/Size'

import GameRunner from '../canvas-game/GameRunner'
import { translateRect } from '../canvas-game/relativeCanvas'

const paddleSize: Size = { width: 150, height: 30 }

class PongGame {
  private readonly tuftsBlue = '#3C97D7'
  private canvasUnits = 1000
  private canvas: HTMLCanvasElement
  private paddleSpeed = 10

  private isPressingRight = false
  private isPressingLeft = false

  pressRight = () => {
    this.isPressingRight = true
  }

  releaseRight = () => {
    this.isPressingRight = false
  }

  pressLeft = () => {
    this.isPressingLeft = true
  }

  releaseLeft = () => {
    this.isPressingLeft = false
  }

  private readonly gameRunner = new GameRunner(() => {
    if (this.isPressingLeft) {
      this.moveLeft()
    }

    if (this.isPressingRight) {
      this.moveRight()
    }
  })

  private playerPaddle: Rect = {
    size: paddleSize,
    position: {
      x: this.canvasUnits / 2 - paddleSize.width / 2,
      y: this.canvasUnits - paddleSize.height,
    },
  }

  private canvasSize = (): Size => {
    return { width: this.canvas.width, height: this.canvas.height }
  }

  private ctx = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.canvas.getContext('2d')!
  }

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
  }

  start = () => {
    this.gameRunner.start()
  }

  renderGame = (superViewSize: Size) => {
    this.setCanvasSize(superViewSize)
    this.renderRect(this.playerPaddle, this.tuftsBlue)
  }

  private moveRight = () => {
    this.clearRect(this.playerPaddle)
    this.playerPaddle.position.x += this.paddleSpeed
    this.renderRect(this.playerPaddle, this.tuftsBlue)
  }

  private moveLeft = () => {
    this.clearRect(this.playerPaddle)
    this.playerPaddle.position.x -= this.paddleSpeed
    this.renderRect(this.playerPaddle, this.tuftsBlue)
  }

  private setCanvasSize = (size: Size) => {
    this.canvas.width = size.width
    this.canvas.height = size.height
  }

  private renderRect = (rect: Rect, color: string) => {
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

export default PongGame
