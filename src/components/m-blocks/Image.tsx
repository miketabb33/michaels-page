import React from 'react'

type ImageProps = {
  imageName: ImageName
}

const Image = ({ imageName }: ImageProps) => <img src={imageMap.get(imageName)} />

export default Image

type ImageName = 'logo'

const imageMap = new Map<ImageName, string>([['logo', 'images/logo.png']])
