import styled, { css } from 'styled-components'
import { desktopAndUp, tabletAndUp } from '../../Breakpoint'

const layout = css`
  width: 100%;
  padding: 0 1.9rem;

  @media ${tabletAndUp} {
    padding: 0 3rem;
  }
  @media ${desktopAndUp} {
    max-width: 125.4rem;
    margin: auto;
  }
`

export const Section = styled.section`
  ${layout}
`

export const PageContainer = styled.div`
  ${layout}
`
