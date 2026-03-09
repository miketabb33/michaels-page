import { Theme } from '../context/ThemeContext'

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

export const darkThemeColor: ThemeColor = {
  id: 'dark',
  splash: '#13131E',
  surface: '#1A1B2E',
  primaryLight: '#A9C1FA',
  primary: '#7AA2F7',
  primaryDark: '#5D85D4',
  secondaryLight: 'rgba(26, 27, 46, 0.97)',
  secondary: 'rgba(19, 19, 30, 0.88)',
  secondaryDark: 'rgba(255, 255, 255, 0.09)',
  accent: '#FF9E64',
  text: '#C0CAF5',
  hover: 'rgba(122, 162, 247, 0.1)',
}

export const lightThemeColor: ThemeColor = {
  id: 'light',
  splash: '#EEF2F9',
  surface: '#FFFFFF',
  primaryLight: '#6B8FD4',
  primary: '#3D59A1',
  primaryDark: '#2C4180',
  secondaryLight: 'rgba(255, 255, 255, 0.97)',
  secondary: 'rgba(238, 242, 249, 0.88)',
  secondaryDark: 'rgba(0, 0, 0, 0.09)',
  accent: '#E07B39',
  text: '#1A1B2E',
  hover: 'rgba(61, 89, 161, 0.08)',
}
