import React from 'react'
import { ChildrenProp } from '../../types/ChildrenProp'
import styled from 'styled-components'

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xSmall};
  margin-left: ${({ theme }) => theme.spacing.medium};
`

const Item = styled.li`
  font-size: 1.8rem;

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
`

const List = ({ children }: ChildrenProp) => {
  return <UnorderedList>{children}</UnorderedList>
}

export const ListItem = ({ children }: ChildrenProp) => <Item>{children}</Item>

export default List
