import React from 'react'

export type IconName = 'rotate' | 'github' | 'linkedin'

type IconProps = {
  iconName: IconName
}

const iconMap = new Map<IconName, string>([
  ['rotate', 'images/icons/rotate.png'],
  ['github', 'images/social-media-icons/github.png'],
  ['linkedin', 'images/social-media-icons/linkedin.png'],
])

const Icon = ({ iconName }: IconProps) => {
  return <img src={iconMap.get(iconName)} alt={`${iconName}-icon`}></img>
}

export default Icon
