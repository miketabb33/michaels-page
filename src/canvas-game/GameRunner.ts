class GameRunner {
  private readonly fps60 = 16.666666667

  private gameClock: NodeJS.Timer | null = null
  private render: () => void

  constructor(render: () => void) {
    this.render = render
  }

  start = () => {
    this.gameClock = setInterval(this.render, this.fps60)
  }

  pause = () => {
    this.gameClock = null
  }
}

export default GameRunner
