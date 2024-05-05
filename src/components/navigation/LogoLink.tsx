import styled from 'styled-components'
import RouterLink from '../../router/RouterLink'
import React from 'react'
import Image from '../m-blocks/Image'
import { PATH_VALUES } from '../../router/pathValues'

const LogoLinkElement = styled(RouterLink)`
  display: block;
  height: 100%;
  aspect-ratio: 1/1;
`

const LogoLink = () => (
  <LogoLinkElement linkTo={PATH_VALUES.home}>
    <Image imageName="logo" />
  </LogoLinkElement>
)

export default LogoLink
