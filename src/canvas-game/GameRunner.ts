import { useState } from 'react'

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
  const [gameClock, setGameClock] = useState<NodeJS.Timer | null>(null)

  const start = () => {
    if (gameClock) return
    setGameClock(setInterval(onFrame, fps60))
  }

  const pause = () => {
    if (!gameClock) return
    clearInterval(gameClock)
    setGameClock(null)
  }

  return { start, pause }
}
