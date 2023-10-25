import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import Home from '../components/home/Home'

const HomePage = () => {
  usePage({ title: 'Home' })
  return (
    <NavLayout>
      <Home />
    </NavLayout>
  )
}

export default HomePage
