import { ThemeColor } from '../styles/ThemeColor'
import { ThemeShadow } from '../styles/ThemeShadow'
import { ThemeSpacing } from '../styles/ThemeSpacing'
import { colorTokens } from '../styles/colorTokens'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeColor
    staticColor: typeof colorTokens
    spacing: ThemeSpacing
    shadow: ThemeShadow
  }
}
