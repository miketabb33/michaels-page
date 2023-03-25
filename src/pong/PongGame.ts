import { StylesSettings } from '../styles/Styles'
import { Rect } from '../types/Rect'
import { Size } from '../types/Size'
import { translateCanvas, translateRect } from './canvas'

const paddleSize: Size = { width: 150, height: 30 }

class PongGame {
  private canvasUnits = 1000
  private canvas: HTMLCanvasElement
  private styles: StylesSettings
  private paddleSpeed = 10
  private gameClock: NodeJS.Timer | null = null

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

  private playerPaddle: Rect = {
    size: paddleSize,
    position: {
      x: this.canvasUnits / 2 - paddleSize.width / 2,
      y: this.canvasUnits - paddleSize.height,
    },
  }

  private getCanvasSize = (): Size => {
    return { width: this.canvas.width, height: this.canvas.height }
  }

  constructor(canvas: HTMLCanvasElement, styles: StylesSettings) {
    this.canvas = canvas
    this.styles = styles
  }

  render = () => {
    if (this.isPressingLeft) {
      this.moveLeft()
    }

    if (this.isPressingRight) {
      this.moveRight()
    }
  }

  start = () => {
    this.gameClock = setInterval(this.render, 17)
  }

  renderGame = (superViewSize: Size) => {
    this.renderCanvas(superViewSize)
    this.renderRect(this.playerPaddle, this.styles.themeColor.primaryLight)
  }

  private moveRight = () => {
    this.clearRect(this.playerPaddle)
    this.playerPaddle.position.x += this.paddleSpeed
    this.renderRect(this.playerPaddle, this.styles.themeColor.primaryLight)
  }

  private moveLeft = () => {
    this.clearRect(this.playerPaddle)
    this.playerPaddle.position.x -= this.paddleSpeed
    this.renderRect(this.playerPaddle, this.styles.themeColor.primaryLight)
  }

  private renderCanvas = (superViewSize: Size) => {
    const calculatedSize = translateCanvas(superViewSize)
    this.canvas.width = calculatedSize
    this.canvas.height = calculatedSize
  }

  private renderRect = (rect: Rect, color: string) => {
    const translatedRect = translateRect(
      rect,
      this.getCanvasSize(),
      this.canvasUnits
    )
    const { width, height } = translatedRect.size
    const { x, y } = translatedRect.position
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = this.canvas.getContext('2d')!
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
  }

  private clearRect = (rect: Rect) => {
    const translatedRect = translateRect(
      rect,
      this.getCanvasSize(),
      this.canvasUnits
    )
    const { width, height } = translatedRect.size
    const { x, y } = translatedRect.position
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const ctx = this.canvas.getContext('2d')!
    ctx.clearRect(x - 1, y - 1, width + 2, height + 2)
  }
}

export default PongGame
