import { ThemeColor, ThemeShadow, ThemeSpacing, ThemeStaticColor } from '../styles/Styles'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColor
    staticColor: ThemeStaticColor
    spacing: ThemeSpacing
    shadow: ThemeShadow
  }
}
