import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import Icon, { IconName } from './Icon'

const IconButtonContainer = styled.button<{ styles: StylesSettings }>`
  cursor: pointer;
  width: 3.5rem;
  height: 3.5rem;
  padding: ${(props) => props.styles.spacing.xxSmall};
  border-radius: ${(props) => props.styles.spacing.small};
  border: 0;
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.styles.themeColor.secondaryLight};
    box-shadow: ${(props) => props.styles.shadow.blur};
  }

  &:active {
    background-color: ${(props) => props.styles.themeColor.secondaryDark};
    box-shadow: ${(props) => props.styles.shadow.blur};
    transform: translateY(1px);
  }
`

type IconButtonProps = {
  iconName: IconName
  onClick: () => void
}

const IconButton = ({ iconName, onClick }: IconButtonProps) => {
  const { styles } = useStyles()
  return (
    <IconButtonContainer onClick={onClick} styles={styles}>
      <Icon iconName={iconName} />
    </IconButtonContainer>
  )
}

export default IconButton
