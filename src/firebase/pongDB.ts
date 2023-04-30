import { addDoc, collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import { db } from './config'
import { HighScore } from '../types/HighScore'

const getPongPath = (path: string) => `games/pong/${path}`

const scoresRef = collection(db, getPongPath('scores'))

type SaveScore = {
  name: string
  score: number
}

export const saveScore = (score: SaveScore): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    addDoc(scoresRef, score)
      .then(() => resolve(true))
      .catch(reject)
  })
}

export const getHighScores = (): Promise<HighScore[]> => {
  const q = query(scoresRef, orderBy('score', 'desc'), limit(5))
  return new Promise((resolve, reject) => {
    getDocs(q)
      .then((results) => {
        const highScores: HighScore[] = results.docs.map((doc) => {
          const data = doc.data()
          const highScore: HighScore = {
            id: doc.id,
            name: (data.name as string) || 'error',
            score: (data.score as number) || 0,
          }
          return highScore
        })
        resolve(highScores)
      })
      .catch(reject)
  })
}
