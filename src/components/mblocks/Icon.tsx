import React from 'react'

export type IconName = 'rotate'

type IconProps = {
  iconName: IconName
}

const iconMap = new Map<IconName, string>([
  ['rotate', 'images/icons/rotate.png'],
])

const Icon = ({ iconName }: IconProps) => {
  return <img src={iconMap.get(iconName)} alt={`${iconName}-icon`}></img>
}

export default Icon
