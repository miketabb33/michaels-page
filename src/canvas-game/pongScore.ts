export type ScoreResult = {
  score: number
}

export const pongScore = () => {
  const scoreResult: ScoreResult = { score: 0 }

  const incrementScore = () => {
    scoreResult.score += 1
  }

  const resetScore = () => {
    scoreResult.score = 0
  }

  return {
    scoreResult,
    incrementScore,
    resetScore,
  }
}
