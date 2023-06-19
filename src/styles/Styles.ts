const white = '#FAF9F6'
const black = '#202124'
const honoluluBlue = '#2176AE'
const tuftsBlue = '#3C97D7'
const argentinianBlue = '#57B8FF'
const tigersEye = '#B66D0D'
const carrotOrange = '#D98F25'
const hunyadiYellow = '#FBB13C'
const tomato = '#FE6847'

export const spacing: ThemeSpacing = {
  xxSmall: '0.5rem',
  xSmall: '0.75rem',
  small: '1rem',
  medium: '2rem',
  large: '3rem',
  xLarge: '4rem',
  xxLarge: '8rem',
}

export const staticColor: ThemeStaticColor = {
  white: white,
  black: black,
}

export const shadow: ThemeShadow = {
  crisp: `0 0 ${spacing.xSmall} rgba(0,0,0,0.5)`,
  blur: `0 0 ${spacing.medium} rgba(0,0,0,0.2)`,
}

export const lightThemeColor: ThemeColor = {
  splash: white,
  primaryLight: argentinianBlue,
  primary: tuftsBlue,
  primaryDark: honoluluBlue,
  secondaryLight: hunyadiYellow,
  secondary: carrotOrange,
  secondaryDark: tigersEye,
  accent: tomato,
  text: black,
}

export const lightStyle: StylesSettings = {
  id: 'light',
  themeColor: lightThemeColor,
  staticColor,
  spacing,
  shadow,
}

export const darkThemeColor: ThemeColor = {
  splash: black,
  primaryLight: hunyadiYellow,
  primary: carrotOrange,
  primaryDark: tigersEye,
  secondaryLight: argentinianBlue,
  secondary: tuftsBlue,
  secondaryDark: honoluluBlue,
  accent: tomato,
  text: white,
}

export const darkStyle: StylesSettings = {
  id: 'dark',
  themeColor: darkThemeColor,
  staticColor,
  spacing,
  shadow,
}

export type Theme = 'light' | 'dark'

export type StylesSettings = {
  id: Theme
  themeColor: ThemeColor
  staticColor: ThemeStaticColor
  spacing: ThemeSpacing
  shadow: ThemeShadow
}

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

export type ThemeStaticColor = {
  white: string
  black: string
}

export type ThemeSpacing = {
  xxSmall: string
  xSmall: string
  small: string
  medium: string
  large: string
  xLarge: string
  xxLarge: string
}

export type ThemeShadow = {
  crisp: string
  blur: string
}
