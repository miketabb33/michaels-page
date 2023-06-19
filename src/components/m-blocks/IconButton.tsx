import React from 'react'
import styled from 'styled-components'
import Icon, { IconName } from './Icon'

const Container = styled.button`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  padding: ${({ theme }) => theme.spacing.xxSmall};
  border-radius: ${({ theme }) => theme.spacing.small};
  border: 0;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryLight};
    box-shadow: ${({ theme }) => theme.shadow.blur};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.secondaryDark};
    box-shadow: ${({ theme }) => theme.shadow.blur};
    transform: translateY(1px);
  }
`

type IconButtonProps = {
  iconName: IconName
  onClick: () => void
}

const IconButton = ({ iconName, onClick }: IconButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Icon iconName={iconName} />
    </Container>
  )
}

export default IconButton
