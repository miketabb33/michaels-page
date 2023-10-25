import React from 'react'
import styled from 'styled-components'

const ImageStyle = styled.img`
  width: 100%;
  height: 100%;
`

type ImageProps = {
  imageName: ImageName
  className?: string
}

const Image = ({ imageName, className }: ImageProps) => (
  <ImageStyle src={imageMap.get(imageName)} alt={`${imageName}-image`} className={className} />
)

export default Image

type ImageName = 'logo' | 'portrait'

const imageMap = new Map<ImageName, string>([
  ['logo', '/images/logo.png'],
  ['portrait', '/images/portrait.jpeg'],
])
