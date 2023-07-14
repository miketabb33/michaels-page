import React from 'react'

type ImageProps = {
  imageName: ImageName
  className?: string
}

const Image = ({ imageName, className }: ImageProps) => <img src={imageMap.get(imageName)} className={className} />

export default Image

type ImageName = 'logo' | 'portrait'

const imageMap = new Map<ImageName, string>([
  ['logo', 'images/logo.png'],
  ['portrait', 'images/portrait.jpeg'],
])
