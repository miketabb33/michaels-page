import React from 'react'
import BoardSvgTTT from './svg/BoardSvgTTT'
import styled from 'styled-components'
import SquareTTT, { SquareTTTProps, useWithSquareTTT } from './SquareTTT'
import { useTheme } from '../../../context/ThemeContext'
import { colorTokens } from '../../../styles/colorTokens'

const Container = styled.div`
  position: relative;
  max-height: 50rem;
  max-width: 50rem;
`

const SquareGrid = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

export type BoardTTTProps = {
  squareBinds: SquareTTTProps[]
}

const BoardTTT = ({ squareBinds }: BoardTTTProps) => {
  const { theme } = useTheme()

  const boardColor = theme === 'light' ? colorTokens.gray_800 : colorTokens.gray_100
  return (
    <Container>
      <BoardSvgTTT color={boardColor} />
      <SquareGrid>
        {squareBinds.map((bind, i) => (
          <SquareTTT key={i} {...bind} />
        ))}
      </SquareGrid>
    </Container>
  )
}

export const useWithBoardTTT = (onTurnEnd: () => void) => {
  const squares = [
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
    useWithSquareTTT(onTurnEnd),
  ]

  const isEmpty = () => squares.filter((s) => s.owner?.markerID !== undefined).length === 0
  const isFull = () => squares.filter((s) => s.owner?.markerID === undefined).length === 0
  const spacesOwned = () => squares.filter((s) => s.owner?.markerID !== undefined).length
  const reset = () => squares.forEach((s) => s.reset())

  return {
    bind: {
      squareBinds: squares.map((s) => s.bind),
    },
    squares,
    isEmpty,
    isFull,
    spacesOwned,
    reset,
  }
}

export default BoardTTT
