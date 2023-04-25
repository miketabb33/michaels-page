import { DirectionValue } from '../types/DirectionValue'
import { Velocity } from '../types/Velocity'
import { Rect } from './rect'

export type CanvasObject = {
  rect: Rect
  color: string
  velocity: Velocity
}

export type CanvasObjectController = {
  getCanvasObject: () => CanvasObject
  move: () => void
  changeDirection: (direction: DirectionValue) => void
}

const canvasObject = (init: CanvasObject): CanvasObjectController => {
  const width = init.rect.size.width
  const height = init.rect.size.height
  let x = init.rect.position.x
  let y = init.rect.position.y
  const speed = init.velocity.speed
  const color = init.color
  let directionalX = init.velocity.directionValue.x
  let directionalY = init.velocity.directionValue.y

  const move = () => {
    addVelocity({ speed, directionValue: { x: directionalX, y: directionalY } })
  }

  const addVelocity = (velocity: Velocity) => {
    const xTranslation = velocity.directionValue.x * velocity.speed
    const yTranslation = velocity.directionValue.y * velocity.speed
    x += xTranslation
    y += yTranslation
  }

  const changeDirection = (newDirection: DirectionValue) => {
    directionalX = newDirection.x
    directionalY = newDirection.y
  }

  const getCanvasObject = (): CanvasObject => {
    return {
      rect: {
        position: { x, y },
        size: { width, height },
      },
      color,
      velocity: {
        speed,
        directionValue: {
          x: directionalX,
          y: directionalY,
        },
      },
    }
  }

  return {
    getCanvasObject,
    move,
    changeDirection,
  }
}

export default canvasObject
