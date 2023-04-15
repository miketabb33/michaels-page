import { CanvasObjectType } from '../pong/CanvasObject'
import { Direction } from './Direction'

export type DirectionalCanvasObject = {
  canvasObject: CanvasObjectType
  direction: Direction
}
