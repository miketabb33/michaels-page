type StyledColor = {
  text: string
}

type StyledSpacing = {
  medium: string
}

type StyledFontSize = {
  normal: string
  large: string
}

const defaultColors: StyledColor = {
  text: '#202124',
}

const defaultSpacing: StyledSpacing = {
  medium: '2rem',
}

const defaultFontSize: StyledFontSize = {
  normal: '1.6rem',
  large: '3rem',
}

export const $color = defaultColors
export const $spacing = defaultSpacing
export const $fontSize = defaultFontSize
