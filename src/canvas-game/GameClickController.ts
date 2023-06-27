class GameClickController {
  private pressingRight = false
  private pressingLeft = false

  leftPressStarted = () => (this.pressingLeft = true)
  leftPressEnded = () => (this.pressingLeft = false)

  rightPressStarted = () => (this.pressingRight = true)
  rightPressEnded = () => (this.pressingRight = false)

  isPressingRight = () => this.pressingRight
  isPressingLeft = () => this.pressingLeft
}

export const PongController = new GameClickController()
