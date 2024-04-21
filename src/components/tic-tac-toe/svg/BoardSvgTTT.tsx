import React from 'react'
import SvgTTT from './SvgTTT'

type BoardSvgTTTProps = {
  size: string
  color: string
}

const BoardSvgTTT = ({ size, color }: BoardSvgTTTProps) => {
  return (
    <SvgTTT $size={size} width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="264" width="10" height="400" rx="5" fill={color} />
      <rect y="137" width="10" height="400" rx="5" transform="rotate(-90 0 137)" fill={color} />
      <rect y="274" width="10" height="400" rx="5" transform="rotate(-90 0 274)" fill={color} />
      <rect x="127" width="10" height="400" rx="5" fill={color} />
    </SvgTTT>
  )
}

export default BoardSvgTTT
