import React from 'react'
import { PageLayout } from '../m-blocks/Layout'
import styled, { css } from 'styled-components'

import { books } from './booksData'
import RecommendedBook from './RecommendedBook'
import { desktopAndUp } from '../../styles/Responsive'

const Header = styled.div`
  padding: 5rem 0 4rem;
`

const Label = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
`

const Title = styled.h1`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(3rem, 5vw, 4.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
  margin: 1rem 0 1.2rem;
  line-height: 1.1;
`

const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.6;
  max-width: 52rem;
  line-height: 1.6;
  margin: 0;
`

const BookLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  ${desktopAndUp(css`
    grid-template-columns: repeat(2, 1fr);
  `)}
`

const Spacer = styled.div`
  height: 5rem;
`

const RecommendedBooks = () => {
  return (
    <PageLayout>
      <Header>
        <Label>Reading list</Label>
        <Title>Books worth your time.</Title>
        <Subtitle>Books that have shaped how I think about software, teams, and craft.</Subtitle>
      </Header>

      <BookLayout>
        {books.map((book) => (
          <RecommendedBook key={book.id} book={book} />
        ))}
      </BookLayout>
      <Spacer />
    </PageLayout>
  )
}

export default RecommendedBooks
