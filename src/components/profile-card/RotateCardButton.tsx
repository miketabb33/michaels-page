import React from 'react'
import styled from 'styled-components'
import IconButton from '../m-blocks/IconButton'

const IconButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xSmall};
  right: ${({ theme }) => theme.spacing.xSmall};
`

type RotateCardButton = {
  onRotateIconClick: () => void
}

const RotateCardButton = ({ onRotateIconClick }: RotateCardButton) => (
  <IconButtonWrapper>
    <IconButton iconName="rotate" onClick={onRotateIconClick} />
  </IconButtonWrapper>
)

export default RotateCardButton
