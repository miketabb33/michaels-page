import { Direction } from '../types/Direction'
import { Velocity } from '../types/Velocity'
import { Rect } from './rect'

export type DirectionValue = {
  x: number
  y: number
}

export type CanvasObject = {
  rect: Rect
  color: string
  velocity: Velocity
}

export type CanvasObjectController = {
  getCanvasObject: () => CanvasObject
  move: () => void
  changeDirection: (direction: DirectionValue) => void
  addVelocity: (velocity: Velocity) => void
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

  const velocityMap = new Map<Direction, Velocity>([
    ['up', { directionValue: { x: 0, y: -1 }, speed }],
    ['right', { directionValue: { x: 1, y: 0 }, speed }],
    ['down', { directionValue: { x: 0, y: 1 }, speed }],
    ['left', { directionValue: { x: -1, y: 0 }, speed }],
    ['up right', { directionValue: { x: 0.5, y: -0.5 }, speed }],
    ['down right', { directionValue: { x: 0.5, y: 0.5 }, speed }],
    ['down left', { directionValue: { x: -0.5, y: 0.5 }, speed }],
    ['up left', { directionValue: { x: -0.5, y: -0.5 }, speed }],
  ])

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
    addVelocity,
  }
}

export default canvasObject
