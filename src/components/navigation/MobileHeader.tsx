import React from 'react'
import styled, { css } from 'styled-components'
import { NavLinkConfig } from '../../config/navConfig'
import { tabLandAndUp } from '../../styles/Responsive'
import LogoLink from './LogoLink'
import Popup, { usePopup } from '../Popup'
import MobileNavMenuShell from './MobileNavMenuShell'

export const MOBILE_HEADER_HEIGHT = '5.4rem'

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
  padding: 0 1.6rem;
  display: flex;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.color.primary},
      ${({ theme }) => theme.color.accent},
      transparent
    );
  }
`

const HamburgerButton = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 0.6rem;
  height: 3.2rem;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 0.25);
  }
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
