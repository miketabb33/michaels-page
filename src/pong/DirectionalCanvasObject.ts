import { Direction } from '../types/Direction'
import CanvasObject, { CanvasObjectController, CanvasObjectType } from './CanvasObject'

export type DirectionalCanvasObjectType = {
  canvasObject: CanvasObjectType
  direction: Direction
}

type DirectionalCanvasObjectController = {
  canvasObjectController: CanvasObjectController
  changeDirection: (newDirection: Direction) => void
  getDirection: () => Direction
}

const DirectionalCanvasObject = (init: DirectionalCanvasObjectType): DirectionalCanvasObjectController => {
  const canvasObjectController = CanvasObject(init.canvasObject)
  let direction = init.direction

  const changeDirection = (newDirection: Direction) => {
    direction = newDirection
  }

  return {
    canvasObjectController,
    changeDirection,
    getDirection: () => direction,
  }
}

export default DirectionalCanvasObject
