import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import Projects from '../components/projects/Projects'
import { usePage } from './usePage'

const ProjectsPage = () => {
  usePage({
    title: 'Projects',
    description: 'Projects built by Michael Tabb — professional work, side projects, and games.',
  })
  return (
    <NavLayout>
      <Projects />
    </NavLayout>
  )
}

export default ProjectsPage
