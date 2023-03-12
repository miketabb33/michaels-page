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
  small: '1rem',
  medium: '2rem',
}

const fontSize: FontSize = {
  normal: '1.6rem',
  large: '3rem',
}

const staticColor: StaticColor = {
  white: white,
  black: black,
}

export const lightStyle: StyleSettings = {
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
}

export const darkStyle: StyleSettings = {
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
}

export type Theme = 'light' | 'dark'

export type StyleSettings = {
  id: Theme
  themeColor: ThemeColor
  staticColor: StaticColor
  spacing: Spacing
  fontSize: FontSize
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
  small: string
  medium: string
}

type FontSize = {
  normal: string
  large: string
}
