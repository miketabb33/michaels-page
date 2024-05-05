import React from 'react'
import styled from 'styled-components'
import BackButtonSvgTTT from './svg/BackButtonSvgTTT'
import { useTheme } from '../../context/ThemeContext'
import { colorTokens } from '../../styles/colorTokens'
import { PATH_VALUES } from '../../router/pathValues'
import RouterLink from '../../router/RouterLink'

const Button = styled(RouterLink)`
  background-color: transparent;
  border: none;
  border-radius: 1rem;
  position: absolute;
  padding: 0.7rem;
  cursor: pointer;
  top: 1rem;
  left: 1rem;

  :hover {
    box-shadow: ${({ theme }) => theme.shadow.blur};
    transform: translateY(-0.1rem);
  }
`

const BackButtonTTT = () => {
  const { theme } = useTheme()
  const buttonColor = theme === 'light' ? colorTokens.gray_800 : colorTokens.gray_100

  return (
    <Button linkTo={PATH_VALUES.ticTacToe.base}>
      <BackButtonSvgTTT color={buttonColor} />
    </Button>
  )
}

export default BackButtonTTT
