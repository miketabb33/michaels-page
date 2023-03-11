import { createGlobalStyle } from 'styled-components'
import { ThemeSettings } from './types/Theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeSettings }>`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  font-family: 'lato', 'sans-serif';
  font-weight: 400;
  color: ${(props) => props.theme.color.text};
  box-sizing: border-box;
}

body {
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
