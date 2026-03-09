import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import Home from '../components/home/Home'

const HomePage = () => {
  usePage({
    title: 'Home',
    description:
      'Michael Tabb — Senior Software Engineer based in Boston, MA. Building software with AI-driven iteration. Writing about engineering, productivity, and craft.',
  })
  return (
    <NavLayout>
      <Home />
    </NavLayout>
  )
}

export default HomePage
