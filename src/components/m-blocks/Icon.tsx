import React from 'react'

export type IconName = 'rotate' | 'github' | 'linkedin' | 'pragmint' | 'pin'

type IconProps = {
  iconName: IconName
  className?: string
}

const iconMap = new Map<IconName, string>([
  ['rotate', '/images/icons/rotate.png'],
  ['github', '/images/social-media-icons/github.png'],
  ['linkedin', '/images/social-media-icons/linkedin.png'],
  ['pragmint', '/images/social-media-icons/pragmint.svg'],
  ['pin', '/images/social-media-icons/pin.png'],
])

const Icon = ({ iconName, className }: IconProps) => {
  return <img src={iconMap.get(iconName)} alt={`${iconName}-icon`} className={className}></img>
}

export default Icon
