import React from 'react'
import { ChildrenProp } from '../../types/ChildrenProp'
import styled from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from './spacingController'

type UlStyleProps = {
  $spacing?: SpacingArgs
}

const UnorderedListStyle = styled.ul<UlStyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
  margin-left: ${({ theme }) => theme.spacing.medium};
  ${({ $spacing }) => spacingController($spacing)}

  li {
    font-size: 1.8rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.color.text};

    &::before {
      display: inline-block;
      content: '';
      background-color: ${({ theme }) => theme.color.primaryDark};
      border-radius: 50%;
      width: 0.8rem;
      aspect-ratio: 1;
      position: relative;
      right: 0.8rem;
      bottom: 0.2rem;
    }
  }
`

const UnorderedList = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <UnorderedListStyle $spacing={spacing}>{children}</UnorderedListStyle>
}

export default UnorderedList
