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
  `)}
`

const PhotoWell = styled.div`
  flex: 0 0 50%;
  min-height: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.primaryDark};
`

const TextWell = styled.div`
  ${({ theme }) => css`
    flex: 0 0 50%;
    min-height: 100%;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    border-top: ${`3px solid ${theme.color.accent}`};

    ${tabPortAndUp(css`
      border-right: ${`3px solid ${theme.color.accent}`};
      border-top: none;
    `)}
  `}
`

const ScreenShoot = styled.img`
  display: block;
  object-fit: cover;
  object-position: top;
  border-radius: 0.5rem;
  min-height: 100%;
  box-shadow: ${({ theme }) => theme.shadow.blur};
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
        <PhotoWell>{<ScreenShoot src={data.imageSource} />}</PhotoWell>
      </Container>
    </Card>
  )
}

export default TicTacToeCard
