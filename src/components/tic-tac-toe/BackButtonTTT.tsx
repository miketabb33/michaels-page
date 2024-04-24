import React from 'react'
import { useRouter } from '../../router/useRouter'
import styled from 'styled-components'
import BackButtonSvgTTT from './svg/BackButtonSvgTTT'

const Button = styled.button`
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
  const { navigateBack } = useInBackButtonTTT()
  return (
    <Button onClick={navigateBack}>
      <BackButtonSvgTTT />
    </Button>
  )
}

const useInBackButtonTTT = () => {
  const { navigateTo } = useRouter()

  return {
    navigateBack: () => navigateTo('/tic-tac-toe'),
  }
}

export default BackButtonTTT
