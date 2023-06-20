import { colorTokens } from './colorTokens'

export type ThemeColor = {
  splash: string
  primaryLight: string
  primary: string
  primaryDark: string
  secondaryLight: string
  secondary: string
  secondaryDark: string
  accent: string
  text: string
}

export const lightThemeColor: ThemeColor = {
  splash: colorTokens.gray_50,
  primaryLight: colorTokens.blue_500,
  primary: colorTokens.blue_600,
  primaryDark: colorTokens.blue_700,
  secondaryLight: colorTokens.orange_400,
  secondary: colorTokens.orange_500,
  secondaryDark: colorTokens.orange_600,
  accent: colorTokens.red_500,
  text: colorTokens.gray_950,
}

export const darkThemeColor: ThemeColor = {
  splash: colorTokens.gray_950,
  primaryLight: colorTokens.orange_400,
  primary: colorTokens.orange_500,
  primaryDark: colorTokens.orange_600,
  secondaryLight: colorTokens.blue_500,
  secondary: colorTokens.blue_600,
  secondaryDark: colorTokens.blue_700,
  accent: colorTokens.red_500,
  text: colorTokens.gray_50,
}