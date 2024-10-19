import React from 'react'
import styled, { css } from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { tabLandAndUp } from '../../styles/Responsive'
import LogoLink from './LogoLink'
import Popup, { usePopup } from '../Popup'
import MobileNavMenuShell from './MobileNavMenuShell'

export const MOBILE_HEADER_HEIGHT = '5rem'

const Container = styled.div`
  position: relative;
  height: ${MOBILE_HEADER_HEIGHT};

  ${tabLandAndUp(css`
    display: none;
  `)}
`

const HeaderContent = styled.nav`
  height: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xxSmall};
  display: flex;
`

const HamburgerButton = styled.div`
  border: 1px solid ${({ theme }) => theme.color.text};
  height: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

type MobileNavProps = {
  navConfig: NavLinkConfig[]
}

const MobileHeader = ({ navConfig }: MobileNavProps) => {
  const popup = usePopup()

  return (
    <Container>
      <HeaderContent>
        <LogoLink />
        <HamburgerButton onClick={popup.click}>Menu</HamburgerButton>
      </HeaderContent>
      <Popup {...popup.bind}>
        <MobileNavMenuShell navConfig={navConfig} />
      </Popup>
    </Container>
  )
}

export default MobileHeader
