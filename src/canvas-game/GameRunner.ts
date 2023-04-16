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
    if (!this.gameClock) return
    clearInterval(this.gameClock)
    this.gameClock = null
  }
}

export default GameRunner

export const useGameRunner = (onFrame: () => void) => {
  const fps60 = 16.666666667
  let gameClock: NodeJS.Timer | null = null

  const start = () => {
    if (gameClock) return
    gameClock = setInterval(onFrame, fps60 * 4)
  }

  const pause = () => {
    if (!gameClock) return
    clearInterval(gameClock)
    gameClock = null
  }

  return { start, pause }
}
