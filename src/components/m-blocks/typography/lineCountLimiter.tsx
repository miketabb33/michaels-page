import { css } from 'styled-components'

export type LineLimitCount = {
  lineLimit?: number
}

export const lineCountLimiter = (lineLimit?: number) => {
  if (!lineLimit) return
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${lineLimit};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}
