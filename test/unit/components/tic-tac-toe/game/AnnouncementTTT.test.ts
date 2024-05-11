import { announcementTextTTT } from '../../../../../src/components/tic-tac-toe/game/AnnouncementTTT'
import { MarkerIdTTT } from '../../../../../src/components/tic-tac-toe/game/PlayerTTT'

const MARKER_ID: MarkerIdTTT = 'X'

describe('Announcement Text TTT', () => {
  it('should equal first', () => {
    const result = announcementTextTTT.first(MARKER_ID)
    expect(result).toEqual('X Goes First')
  })

  it('should equal draw', () => {
    const result = announcementTextTTT.draw
    expect(result).toEqual('Draw')
  })

  it('should equal turn', () => {
    const result = announcementTextTTT.turn(MARKER_ID)
    expect(result).toEqual("X's Turn")
  })

  it('should equal winner', () => {
    const result = announcementTextTTT.winner(MARKER_ID)
    expect(result).toEqual('X is the Winner!')
  })
})
