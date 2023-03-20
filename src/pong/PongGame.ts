import { StylesSettings } from '../styles/Styles'
import { Rect } from '../types/Rect'
import { Size } from '../types/Size'
import { translateCanvas, translateRect } from './canvas'

const paddleSize: Size = { width: 150, height: 30 }

class PongGame {
  private canvasUnits = 1000
  private canvas: HTMLCanvasElement
  private styles: StylesSettings
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

  renderGame = (superViewSize: Size) => {
    this.renderCanvas(superViewSize)
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
}

export default PongGame
