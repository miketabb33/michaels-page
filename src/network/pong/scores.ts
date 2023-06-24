import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../../firebaseInit'

const scoresRef = collection(db, 'games/pong/scores')

export type HighScore = {
  id: string
  name: string
  score: number
}

type SaveScore = {
  name: string
  score: number
}

export const saveScore = async (score: SaveScore): Promise<boolean> => {
  await addDoc(scoresRef, score)
  return true
}

export const getHighScores = async (): Promise<HighScore[]> => {
  const q = query(scoresRef, orderBy('score', 'desc'), limit(5))
  const results = await getDocs(q)
  return results.docs.map(parseHighScore)
}

const parseHighScore = (doc: QueryDocumentSnapshot): HighScore => {
  const data: DocumentData | undefined = doc.data()
  return {
    id: doc.id,
    name: (data?.name as string) || 'error',
    score: (data?.score as number) || 0,
  }
}
