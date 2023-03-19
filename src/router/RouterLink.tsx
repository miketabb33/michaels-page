import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type RouterLinkProps = {
  children: ReactNode
  linkTo: string
  className?: string
}

const RouterLink = ({ className, linkTo, children }: RouterLinkProps) => {
  return (
    <Link to={linkTo} className={className}>
      {children}
    </Link>
  )
}

export default RouterLink
