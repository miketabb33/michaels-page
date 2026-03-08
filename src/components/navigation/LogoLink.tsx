import React from 'react'
import styled from 'styled-components'
import RouterLink from '../../router/RouterLink'
import { PATH_VALUES } from '../../router/pathValues'

const LogoLinkElement = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.6rem;
`

const Monogram = styled.span`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.04em;
  line-height: 1;
`

const Dot = styled.span`
  color: ${({ theme }) => theme.color.accent};
`

const LogoLink = () => (
  <LogoLinkElement linkTo={PATH_VALUES.home}>
    <Monogram>
      MT<Dot>.</Dot>
    </Monogram>
  </LogoLinkElement>
)

export default LogoLink
