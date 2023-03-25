import React from 'react'
import styled from 'styled-components'
import { useStyles } from '../../context/StylesContext'
import { StylesSettings } from '../../styles/Styles'
import { ChildrenProp } from '../../types/ChildrenProp'

const Container = styled.div<{ styles: StylesSettings }>`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.styles.staticColor.white};
  box-shadow: ${(props) => props.styles.shadow.blur};
  border-radius: ${(props) => props.styles.spacing.medium};
`

const Card = ({ children }: ChildrenProp) => {
  const { styles } = useStyles()
  return <Container styles={styles}>{children}</Container>
}

export default Card
