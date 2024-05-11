import React from 'react'
import { PageLayout } from '../m-blocks/Layout'
import H1 from '../m-blocks/typography/H1'
import styled, { css } from 'styled-components'

import { books } from './booksData'
import RecommendedBook from './RecommendedBook'
import { H4 } from '../m-blocks/typography'
import { desktopAndUp } from '../../styles/Responsive'

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
      <H4 $spacing={{ marginTop: 'l' }}>
        These books have significantly enriched my career as a software developer and are invaluable resources. I
        enthusiastically endorse them to others seeking to enhance their skills and knowledge.
      </H4>
      <H1 $spacing={{ marginTop: 'm', marginBottom: 'm' }}>Recommended Books:</H1>

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
