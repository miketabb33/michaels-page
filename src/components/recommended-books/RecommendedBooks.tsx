import React from 'react'
import Card from '../m-blocks/Card'
import { PageLayout } from '../m-blocks/Layout'
import H1 from '../m-blocks/typography/H1'
import styled from 'styled-components'

type Book = {
  imageSource: string
}

const books: Book[] = [
  { imageSource: 'https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg' },
  { imageSource: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SY445_SX342_.jpg' },
  { imageSource: 'https://m.media-amazon.com/images/I/71UAsPBdgdL._SY522_.jpg' },
]

const BookLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  padding: 2rem;
`

const BookCell = styled.a`
  max-height: 25rem;
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;

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

const RecommendedBooks = () => {
  return (
    <PageLayout>
      <H1 spacing={{ marginTop: 'l', marginBottom: 'm' }}>Recommended Books:</H1>
      <Card>
        <BookLayout>
          {books.map((book) => {
            return (
              <BookCell key={book.imageSource} href={book.imageSource}>
                <BookImg src={book.imageSource} />
              </BookCell>
            )
          })}
        </BookLayout>
      </Card>
    </PageLayout>
  )
}

export default RecommendedBooks
