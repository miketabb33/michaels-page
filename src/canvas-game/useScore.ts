import { useState } from 'react'

export const useScore = () => {
  const [score, setScore] = useState(0)
  const inGameScore = { value: 0 }

  const incrementScore = () => {
    inGameScore.value += 1
    setScore(inGameScore.value)
  }

  const resetScore = () => {
    inGameScore.value = 0
    setScore(0)
  }

  return {
    inGameScore,
    score,
    incrementScore,
    resetScore,
  }
}
