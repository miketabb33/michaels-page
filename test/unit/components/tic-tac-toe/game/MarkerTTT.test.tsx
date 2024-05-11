import { act, render, renderHook } from '@testing-library/react'
import MarkerTTT, { useWithMarkerTTT } from '../../../../../src/components/tic-tac-toe/game/MarkerTTT'
import { PlayerTTT } from '../../../../../src/components/tic-tac-toe/game/PlayerTTT'
import React from 'react'

const PLAYER_COLOR = 'blue'

const PLAYER: PlayerTTT = {
  markerID: 'O',
  color: PLAYER_COLOR,
}

describe('Use With Marker TTT', () => {
  it('should return player marker', () => {
    const { result } = renderHook(() => useWithMarkerTTT(PLAYER))
    expect(result.current.bind.markerId).toEqual('O')
    expect(result.current.bind.markerSvgBind.color).toEqual(PLAYER_COLOR)
  })

  it('should return no color when there is no player', () => {
    const { result } = renderHook(() => useWithMarkerTTT(null))
    expect(result.current.bind.markerSvgBind.color).toEqual('')
  })

  it('should set winning', () => {
    const DELAY = 0.2
    const { result } = renderHook(() => useWithMarkerTTT(PLAYER))

    act(() => result.current.setWinning(DELAY))

    expect(result.current.bind.markerSvgBind.color).toEqual('#D7E725')
    expect(result.current.bind.markerSvgBind.isAnimating).toBe(true)
    expect(result.current.bind.markerSvgBind.animationDelay).toEqual(DELAY)
  })

  it('should set red', () => {
    const { result } = renderHook(() => useWithMarkerTTT(PLAYER))
    act(result.current.setRed)
    expect(result.current.bind.markerSvgBind.color).toEqual('red')
  })

  it('should reset', () => {
    const { result } = renderHook(() => useWithMarkerTTT(PLAYER))
    act(result.current.setRed)
    act(() => result.current.setWinning(0))
    act(result.current.reset)
    expect(result.current.bind.markerSvgBind.color).toEqual(PLAYER_COLOR)
  })
})

describe('Marker TTT', () => {
  it('should match snapshot for X', () => {
    const { asFragment } = render(<MarkerTTT markerSvgBind={{ color: 'red' }} markerId={'X'} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should match snapshot for O', () => {
    const { asFragment } = render(<MarkerTTT markerSvgBind={{ color: 'red' }} markerId={'O'} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
