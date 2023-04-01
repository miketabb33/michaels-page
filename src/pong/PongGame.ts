import { Size } from '../types/Size'
import GameRunner from '../canvas-game/GameRunner'
import GameCanvas from '../canvas-game/GameCanvas'
import { CanvasObject } from '../types/CanvasObject'
import { getPongConfig } from './PongConfig'

class PongGame {
  private readonly gameCanvas: GameCanvas
  private pongBall: CanvasObject
  private playerPaddle: CanvasObject
  private opponentPaddle: CanvasObject

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
    this.gameCanvas.moveDownUnlessOffCanvas(this.pongBall)
    this.gameCanvas.moveLeftUnlessOffCanvas(this.pongBall)

    if (this.isPressingLeft) {
      this.gameCanvas.moveLeftUnlessOffCanvas(this.playerPaddle)
    }

    if (this.isPressingRight) {
      this.gameCanvas.moveRightUnlessOffCanvas(this.playerPaddle)
    }
  })

  constructor(canvas: HTMLCanvasElement) {
    const { pongBall, playerPaddle, opponentPaddle, canvasUnits } =
      getPongConfig()
    this.gameCanvas = new GameCanvas(canvas, canvasUnits)
    this.playerPaddle = playerPaddle
    this.opponentPaddle = opponentPaddle
    this.pongBall = pongBall
  }

  start = () => {
    this.gameRunner.start()
  }

  renderGame = (superViewSize: Size) => {
    this.gameCanvas.setCanvasSize(superViewSize)
    this.gameCanvas.renderRect(this.playerPaddle.rect, this.playerPaddle.color)
    this.gameCanvas.renderRect(this.pongBall.rect, this.pongBall.color)
    this.gameCanvas.renderRect(
      this.opponentPaddle.rect,
      this.opponentPaddle.color
    )
  }
}

export default PongGame
