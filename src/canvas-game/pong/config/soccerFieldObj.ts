import { colorTokens } from '../../../styles/colorTokens'
import { RenderableObject } from '../../render2dContext'

const horizontalLine = (canvasUnits: number): RenderableObject => {
  const height = 2
  return {
    rect: {
      position: {
        x: 0,
        y: canvasUnits / 2 - height / 2,
      },
      size: {
        width: canvasUnits,
        height,
      },
    },
    color: colorTokens.gray_50,
    shape: 'rectangle',
  }
}

const middleCircle = (canvasUnits: number): RenderableObject => {
  const size = 300
  return {
    rect: {
      position: {
        x: canvasUnits / 2 - size / 2,
        y: canvasUnits / 2 - size / 2,
      },
      size: {
        width: size,
        height: size,
      },
    },
    color: colorTokens.gray_50,
    shape: 'circle-outline',
  }
}

export const soccerField = (canvasDimensionUnits: number) => {
  return [horizontalLine(canvasDimensionUnits), middleCircle(canvasDimensionUnits)]
}
