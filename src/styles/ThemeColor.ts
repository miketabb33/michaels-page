import { Theme } from '../context/ThemeContext'
import { colorTokens } from './colorTokens'

export type ThemeColor = {
  id: Theme
  splash: string
  surface: string
  primaryLight: string
  primary: string
  primaryDark: string
  secondaryLight: string
  secondary: string
  secondaryDark: string
  accent: string
  text: string
  hover: string
}

export const lightThemeColor: ThemeColor = {
  id: 'light',
  splash: '#EEEEF3',
  surface: '#FFFFFF',
  primaryLight: colorTokens.violet_400,
  primary: colorTokens.violet_600,
  primaryDark: colorTokens.violet_700,
  secondaryLight: '#1A1F2E',
  secondary: '#0C0F1A',
  secondaryDark: '#060810',
  accent: colorTokens.amber_500,
  text: '#1C1C2E',
  hover: colorTokens.violet_50,
}

export const darkThemeColor: ThemeColor = {
  id: 'dark',
  splash: '#07070F',
  surface: '#0E1120',
  primaryLight: colorTokens.violet_300,
  primary: colorTokens.violet_400,
  primaryDark: colorTokens.violet_500,
  secondaryLight: '#141726',
  secondary: '#080A14',
  secondaryDark: '#03040A',
  accent: colorTokens.amber_400,
  text: '#E4E4F0',
  hover: colorTokens.violet_900,
}
