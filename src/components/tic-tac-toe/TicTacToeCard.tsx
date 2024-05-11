import React from 'react'
import { TicTacToeCardData } from './TicTacToeCardData'
import styled, { css } from 'styled-components'
import { H2, P } from '../m-blocks/typography'
import Card from '../m-blocks/Card'
import Button from '../m-blocks/Button'
import { tabPortAndUp } from '../../styles/Responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  ${tabPortAndUp(css`
    flex-direction: row;
    height: 36rem;
  `)}
`

const PhotoWell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.primaryDark};
`

const ScreenShoot = styled.img`
  object-fit: cover;
  object-position: top;
  height: 30rem;
  min-width: 75%;
  border-radius: 0.5rem;

  ${tabPortAndUp(css`
    height: 100%;
    aspect-ratio: 1.5666;
  `)}
`

const TextWell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  width: 100%;

  ${tabPortAndUp(css`
    height: 100%;
    border-right: 1px solid black;
  `)}
`

export type TicTacToeCardProps = {
  data: TicTacToeCardData
  onClick: () => void
}

const TicTacToeCard = ({ data, onClick }: TicTacToeCardProps) => {
  return (
    <Card>
      <Container>
        <TextWell>
          <H2>{data.title}</H2>
          <P>{data.description}</P>
          <Button onClick={onClick}>Play</Button>
        </TextWell>
        <PhotoWell>
          <ScreenShoot src={data.imageSource} />
        </PhotoWell>
      </Container>
    </Card>
  )
}

export default TicTacToeCard
