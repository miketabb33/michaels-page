import styled, { css } from 'styled-components'

type StyledSVG = {
  $size: string
}

const SvgTTT = styled.svg<StyledSVG>`
  ${({ $size }) => css`
    width: ${$size};
    height: ${$size};
  `}
`
export default SvgTTT
