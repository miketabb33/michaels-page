import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import RecommendedBooks from '../components/recommended-books/RecommendedBooks'

const RecommendedBooksPage = () => {
  usePage({ title: 'Books' })
  return (
    <NavLayout>
      <RecommendedBooks />
    </NavLayout>
  )
}

export default RecommendedBooksPage
