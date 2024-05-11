export type MarkerIdTTT = 'X' | 'O'

export type PlayerTTT = {
  markerID: MarkerIdTTT
  color: string
}

export const XPlayer: PlayerTTT = {
  markerID: 'X',
  color: '#1FA889',
}

export const OPlayer: PlayerTTT = {
  markerID: 'O',
  color: '#61C278',
}
