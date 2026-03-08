import { createGlobalStyle, css } from 'styled-components'
import { tabPortAndUp } from './Responsive'

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html, body {
  height: 100%;
}

#root {
  min-height: 100%;
}

html {
  font-size: 50%;
  font-family: 'DM Sans', 'sans-serif';
  font-weight: 400;
  color: ${({ theme }) => theme.color.text};
  box-sizing: border-box;
  scroll-behavior: smooth;

  ${tabPortAndUp(css`
    font-size: 62.5%;
  `)}
}

body {
  background-color: ${({ theme }) => theme.color.splash};
  font-size: 1.6rem;
  overflow-y: scroll;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Bricolage Grotesque', 'DM Sans', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
}

body,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

::selection {
  ${({ theme }) => css`
    background-color: ${theme.color.primary};
    color: #ffffff;
  `}
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.color.hover};
  border-radius: 3px;
}
`

export default GlobalStyle
