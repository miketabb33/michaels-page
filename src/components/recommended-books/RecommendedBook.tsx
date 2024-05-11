import React from 'react'
import styled from 'styled-components'
import { RecommendedBookData } from './booksData'
import { Bold, H4, P } from '../m-blocks/typography'

const BookCell = styled.a`
  display: flex;
  max-height: 21.5rem;
  min-height: 21.5rem;
  height: 21.5rem;
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;
  text-decoration: none;

  transition: transform 0.2s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.accent};
    transform: scale(1.015);
    box-shadow: ${({ theme }) => theme.shadow.soft};
  }
`

const BookImg = styled.img`
  object-fit: cover;
  height: 100%;
  aspect-ratio: 0.755;
`

const RightSide = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-left: 1.5rem;
`

const Title = styled(H4).attrs({ $lineLimit: 2 })`
  line-height: normal;
`

const Authors = styled(Bold).attrs({ $lineLimit: 1 })``

const Description = styled(P).attrs({ $lineLimit: 5 })`
  line-height: normal;
`

type RecommendedBookProps = {
  book: RecommendedBookData
}

const RecommendedBook = ({ book }: RecommendedBookProps) => {
  return (
    <BookCell href={book.affiliateLink} target="_blank">
      <BookImg src={book.imageSource} />
      <RightSide>
        <Title>{book.title}</Title>
        <Authors>By {book.authors}</Authors>
        <Description>{book.description}</Description>
      </RightSide>
    </BookCell>
  )
}

export default RecommendedBook
