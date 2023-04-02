import { Size } from '../types/Size'
import GameRunner from '../canvas-game/GameRunner'
import GameCanvas from '../canvas-game/GameCanvas'
import { CanvasObject } from '../types/CanvasObject'
import { getPongConfig } from './PongConfig'
import { DirectionalCanvasObject } from '../types/DirectionalCanvasObject'
import { random } from '../Random'

class PongGame {
  private readonly gameCanvas: GameCanvas
  private pongBall: DirectionalCanvasObject
  private playerPaddle: CanvasObject
  private opponentPaddle: DirectionalCanvasObject
  private score = 0
  private onScore: (score: number) => void

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
    this.gameCanvas.clearCanvas()

    const pongBall_touched_playerPaddle = this.gameCanvas.collisionDetection(
      this.playerPaddle.rect,
      this.pongBall.canvasObject.rect
    )
    const pongBall_touched_opponentPaddle = this.gameCanvas.collisionDetection(
      this.opponentPaddle.canvasObject.rect,
      this.pongBall.canvasObject.rect
    )

    if (pongBall_touched_playerPaddle) {
      const randomNum = random(3)
      if (randomNum === 0) this.pongBall.direction = 'up left'
      if (randomNum === 1) this.pongBall.direction = 'up right'
      if (randomNum === 2) this.pongBall.direction = 'up'
      this.score += 1
      this.onScore(this.score)
    }

    if (pongBall_touched_opponentPaddle) {
      const randomNum = random(3)
      if (randomNum === 1) this.pongBall.direction = 'down left'
      if (randomNum === 2) this.pongBall.direction = 'down right'
      if (randomNum === 3) this.pongBall.direction = 'down'
    }

    const isPongBallOffCanvas = this.gameCanvas.moveRectUnlessOffCanvas(
      this.pongBall.canvasObject,
      this.pongBall.direction
    )

    if (isPongBallOffCanvas === 'down') {
      this.gameRunner.pause()
      alert('You Lose!')
    }

    if (isPongBallOffCanvas === 'up') {
      this.gameRunner.pause()
      alert('You Win!')
    }

    if (isPongBallOffCanvas === 'left' && this.pongBall.direction === 'down left') {
      this.pongBall.direction = 'down right'
    }

    if (isPongBallOffCanvas === 'left' && this.pongBall.direction === 'up left') {
      this.pongBall.direction = 'up right'
    }

    if (isPongBallOffCanvas === 'right' && this.pongBall.direction === 'down right') {
      this.pongBall.direction = 'down left'
    }

    if (isPongBallOffCanvas === 'right' && this.pongBall.direction === 'up right') {
      this.pongBall.direction = 'up left'
    }

    if (this.isPressingLeft) {
      this.gameCanvas.moveRectUnlessOffCanvas(this.playerPaddle, 'left')
    }

    if (this.isPressingRight) {
      this.gameCanvas.moveRectUnlessOffCanvas(this.playerPaddle, 'right')
    }

    this.renderRectangles()
  })

  constructor(canvas: HTMLCanvasElement, onScore: (score: number) => void) {
    const { pongBall, playerPaddle, opponentPaddle, canvasUnits } = getPongConfig()
    this.gameCanvas = new GameCanvas(canvas, canvasUnits)
    this.playerPaddle = playerPaddle
    this.opponentPaddle = opponentPaddle
    this.pongBall = pongBall
    this.onScore = onScore
  }

  start = () => {
    this.gameRunner.start()
  }

  renderGame = (superViewSize: Size) => {
    this.gameCanvas.setCanvasSize(superViewSize)
    this.renderRectangles()
  }

  private renderRectangles = () => {
    this.gameCanvas.renderRect(this.playerPaddle.rect, this.playerPaddle.color)
    this.gameCanvas.renderRect(this.pongBall.canvasObject.rect, this.pongBall.canvasObject.color)
    this.gameCanvas.renderRect(this.opponentPaddle.canvasObject.rect, this.opponentPaddle.canvasObject.color)
  }
}

export default PongGame
