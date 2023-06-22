import styled from 'styled-components'
import RouterLink from '../../router/RouterLink'
import React from 'react'
import Image from '../m-blocks/Image'

const LogoLinkElement = styled(RouterLink)<{ size: LogoSize }>`
  width: ${(props) => (props.size === 'large' ? '6rem' : '4rem')};
  aspect-ratio: 1;
`

type LogoSize = 'small' | 'large'

type LogoLinkProps = {
  size: LogoSize
}

const LogoLink = ({ size }: LogoLinkProps) => (
  <LogoLinkElement linkTo="/" size={size}>
    <Image imageName="logo" />
  </LogoLinkElement>
)

export default LogoLink
