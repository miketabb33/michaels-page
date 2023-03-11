export type Theme = 'light' | 'dark'

export type ThemeSettings = {
  id: Theme
  color: Color
  spacing: Spacing
  fontSize: FontSize
}

type Color = {
  text: string
}

type Spacing = {
  medium: string
}

type FontSize = {
  normal: string
  large: string
}
