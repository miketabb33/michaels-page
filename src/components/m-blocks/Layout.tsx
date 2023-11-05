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

export const ArticleLayout = styled.div`
  ${layout}

  @media ${tabletAndUp} {
    max-width: 80rem;
  }
`

export const SectionLayout = styled.section`
  ${layout}
`

export const PageLayout = styled.div`
  ${layout}
`
