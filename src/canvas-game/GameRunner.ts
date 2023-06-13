export const GameRunner = (onFrame: () => void) => {
  const fps60 = 16.666666667
  let gameClock: NodeJS.Timer | null = null

  const start = () => {
    if (gameClock) return
    gameClock = setInterval(onFrame, fps60)
  }

  const stop = () => {
    if (!gameClock) return
    clearInterval(gameClock)
    gameClock = null
  }

  return { start, stop }
}
