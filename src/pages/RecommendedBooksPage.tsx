import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import RecommendedBooks from '../components/recommended-books/RecommendedBooks'

const RecommendedBooksPage = () => {
  usePage({
    title: 'Recommended Books',
    description: 'Books recommended by Michael Tabb — on software engineering, agile practices, teamwork, and building great products.',
  })
  return (
    <NavLayout>
      <RecommendedBooks />
    </NavLayout>
  )
}

export default RecommendedBooksPage
