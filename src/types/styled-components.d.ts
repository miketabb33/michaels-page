import { ThemeColor, ThemeShadow, ThemeSpacing } from '../styles/ThemeShadow'
import { colorTokens } from '../styles/colorTokens'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeColor
    staticColor: typeof colorTokens
    spacing: ThemeSpacing
    shadow: ThemeShadow
  }
}
