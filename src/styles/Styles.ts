const white = '#FAF9F6'
const black = '#202124'
const honoluluBlue = '#2176AE'
const tuftsBlue = '#3C97D7'
const argentinianBlue = '#57B8FF'
const tigersEye = '#B66D0D'
const carrotOrange = '#D98F25'
const hunyadiYellow = '#FBB13C'
const tomato = '#FE6847'

const spacing: Spacing = {
  xSmall: '0.75rem',
  small: '1rem',
  medium: '2rem',
  large: '4rem',
  xLarge: '8rem',
}

const fontSize: FontSize = {
  normal: '1.6rem',
  large: '3rem',
}

const staticColor: StaticColor = {
  white: white,
  black: black,
}

const shadow: Shadow = {
  box: `0 0 ${spacing.xSmall} rgba(0,0,0,0.5)`,
}

export const lightStyle: StylesSettings = {
  id: 'light',
  themeColor: {
    splash: white,
    primaryLight: argentinianBlue,
    primary: tuftsBlue,
    primaryDark: honoluluBlue,
    secondaryLight: hunyadiYellow,
    secondary: carrotOrange,
    secondaryDark: tigersEye,
    accent: tomato,
    text: black,
  },
  staticColor,
  spacing,
  fontSize,
  shadow,
}

export const darkStyle: StylesSettings = {
  id: 'dark',
  themeColor: {
    splash: black,
    primaryLight: hunyadiYellow,
    primary: carrotOrange,
    primaryDark: tigersEye,
    secondaryLight: argentinianBlue,
    secondary: tuftsBlue,
    secondaryDark: honoluluBlue,
    accent: tomato,
    text: white,
  },
  staticColor,
  spacing,
  fontSize,
  shadow,
}

export type Theme = 'light' | 'dark'

export type StylesSettings = {
  id: Theme
  themeColor: ThemeColor
  staticColor: StaticColor
  spacing: Spacing
  fontSize: FontSize
  shadow: Shadow
}

type ThemeColor = {
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

type StaticColor = {
  white: string
  black: string
}

type Spacing = {
  xSmall: string
  small: string
  medium: string
  large: string
  xLarge: string
}

type FontSize = {
  normal: string
  large: string
}

type Shadow = {
  box: string
}
