import styled, { css } from 'styled-components'
import { tabLandAndUp } from '../../styles/Responsive'

export const InfoBarTTT = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  border-bottom: 0.1rem solid ${({ theme }) => theme.staticColor.gray_850};
  border-top: 0.1rem solid ${({ theme }) => theme.staticColor.gray_850};

  ${tabLandAndUp(css`
    border-top: none;
  `)}

  box-shadow: ${({ theme }) => theme.shadow.crisp};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`

export default InfoBarTTT
