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

html, body, #root {
  height: 100%;
}

html {
  font-size: 50%;
  font-family: 'lato', 'sans-serif';
  font-weight: 400;
  color: ${({ theme }) => theme.color.text};
  box-sizing: border-box;

  ${tabPortAndUp(css`
    font-size: 62.5%;
  `)}
}

body {
  background-color: ${({ theme }) => theme.color.splash};
  font-size: 1.6rem;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: ${({ theme }) => theme.staticColor.gray_900}
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
`

export default GlobalStyle
