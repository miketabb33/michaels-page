import { themeSpacing } from './ThemeSpacing'

export const themeShadow: ThemeShadow = {
  crisp: `0 0 ${themeSpacing.xSmall} rgba(0,0,0,0.5)`,
  blur: `0 0 ${themeSpacing.medium} rgba(0,0,0,0.2)`,
  strong: `0 1rem 5rem black`,
}

export type ThemeShadow = {
  crisp: string
  blur: string
  strong: string
}
