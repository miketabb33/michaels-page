import React from 'react'

type BackButtonSvgTTTProps = {
  color: string
}

const BackButtonSvgTTT = ({ color }: BackButtonSvgTTTProps) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <path d="M11.672 3.891l-8.109 8.109 8.109 8.109-1.781 1.781-9.891-9.891 9.891-9.891z"></path>
    </svg>
  )
}

export default BackButtonSvgTTT
