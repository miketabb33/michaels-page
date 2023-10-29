import { css } from 'styled-components'

export type Spacing = {
  spacing?: SpacingArgs
}

type SpacingSize = 'xs' | 's' | 'm' | 'l' | 'xl'

export type SpacingArgs = {
  padding?: SpacingSize
  paddingLeft?: SpacingSize
  paddingRight?: SpacingSize
  paddingTop?: SpacingSize
  paddingBottom?: SpacingSize
  margin?: SpacingSize
  marginLeft?: SpacingSize
  marginRight?: SpacingSize
  marginTop?: SpacingSize
  marginBottom?: SpacingSize
}

type RemSpacing = {
  padding?: string
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
  margin?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  marginBottom?: string
}

type propertyKeys =
  | 'padding'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingBottom'
  | 'margin'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginBottom'

export const spacingController = (args?: SpacingArgs) => {
  if (!args) return ''
  return css`
    ${parseSizeToRemObject(args)}
  `
}

const parseSizeToRemObject = (args: SpacingArgs) => {
  const properties = Object.keys(args) as propertyKeys[]
  const obj: RemSpacing = {}

  properties.forEach((property) => {
    const size = args[property] || 's'
    const rem = sizeToRemMap.get(size) || '1rem'
    obj[`${property}`] = rem
  })

  return obj
}

const sizeToRemMap = new Map<SpacingSize, string>([
  ['xs', '0.5rem'],
  ['s', '1rem'],
  ['m', '2rem'],
  ['l', '4rem'],
  ['xl', '8rem'],
])
