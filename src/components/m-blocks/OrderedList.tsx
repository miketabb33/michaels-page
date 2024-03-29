import React from 'react'
import { ChildrenProp } from '../../types/ChildrenProp'
import styled from 'styled-components'
import { Spacing, SpacingArgs, spacingController } from './spacingController'

type OlStyleProps = {
  $spacing?: SpacingArgs
}

const OrderedListStyle = styled.ul<OlStyleProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
  margin-left: ${({ theme }) => theme.spacing.large};
  ${({ $spacing }) => spacingController($spacing)}
  ::before {
    display: none;
  }

  li {
    color: ${({ theme }) => theme.color.text};
    font-size: 1.8rem;
    line-height: 3rem;
    list-style: decimal;
    padding-left: ${({ theme }) => theme.spacing.small};

    ::before {
      display: none;
    }

    li {
      list-style: lower-alpha;
      ::before {
        display: none;
      }

      li {
        list-style: lower-roman;
        ::before {
          display: none;
        }
      }
    }
  }
`

const OrderedList = ({ children, spacing }: ChildrenProp & Spacing) => {
  return <OrderedListStyle $spacing={spacing}>{children}</OrderedListStyle>
}

export default OrderedList
