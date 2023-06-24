import { getDocs } from 'firebase/firestore'
import { getHighScores } from '../../../../src/network/pong/scores'

jest.mock('firebase/firestore')

const GET_DOCS = getDocs as jest.Mock

describe('Scores', () => {
  it('should parse high scores', async () => {
    const MOCK_SCORE_1 = makeHighScoreMock('ID_1', 'NAME_1', 1)
    const MOCK_SCORE_2 = makeHighScoreMock('ID_2', 'NAME_2', 2)
    GET_DOCS.mockImplementationOnce(() => ({ docs: [MOCK_SCORE_1, MOCK_SCORE_2] }))
    const highScores = await getHighScores()
    expect(highScores[0]).toEqual({ id: 'ID_1', name: 'NAME_1', score: 1 })
    expect(highScores[1]).toEqual({ id: 'ID_2', name: 'NAME_2', score: 2 })
  })
  it('should parse with default values if attributes are missing', async () => {
    const MOCK_SCORE_1 = { id: 'ID_1', data: () => {} }
    GET_DOCS.mockImplementationOnce(() => ({ docs: [MOCK_SCORE_1] }))
    const highScores = await getHighScores()
    expect(highScores[0]).toEqual({ id: 'ID_1', name: 'error', score: 0 })
  })
})

const makeHighScoreMock = (id: string, name: string, score: number) => ({ data: () => ({ name, score }), id })
