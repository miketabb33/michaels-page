import styled from 'styled-components'
import RouterLink from '../../router/RouterLink'
import React from 'react'
import Image from '../m-blocks/Image'

const LogoLinkElement = styled(RouterLink)`
  display: block;
  height: 100%;
  aspect-ratio: 1/1;
`

const LogoLink = () => (
  <LogoLinkElement linkTo="/">
    <Image imageName="logo" />
  </LogoLinkElement>
)

export default LogoLink
