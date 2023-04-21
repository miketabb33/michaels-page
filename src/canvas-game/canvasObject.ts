import { Direction } from '../types/Direction'
import { Rect } from '../types/Rect'
import { Velocity } from '../types/Velocity'

export type CanvasObjectType = {
  rect: Rect
  color: string
  speed: number
  direction: Direction
}

export type CanvasObjectController = {
  getCanvasObject: () => CanvasObjectType
  move: (direction: Direction) => void
  changeDirection: (direction: Direction) => void
  addVelocity: (velocity: Velocity) => void
}

const canvasObject = (init: CanvasObjectType): CanvasObjectController => {
  const width = init.rect.size.width
  const height = init.rect.size.height
  let x = init.rect.position.x
  let y = init.rect.position.y
  const speed = init.speed
  const color = init.color
  let direction = init.direction

  const move = (direction: Direction) => {
    const velocity = velocityMap.get(direction)
    if (velocity) {
      addVelocity(velocity)
    }
  }

  const addVelocity = (velocity: Velocity) => {
    const xTranslation = velocity.x * velocity.speed
    const yTranslation = velocity.y * velocity.speed
    x += xTranslation
    y += yTranslation
  }

  const velocityMap = new Map<Direction, Velocity>([
    ['up', { x: 0, y: -1, speed }],
    ['right', { x: 1, y: 0, speed }],
    ['down', { x: 0, y: 1, speed }],
    ['left', { x: -1, y: 0, speed }],
    ['up right', { x: 0.5, y: -0.5, speed }],
    ['down right', { x: 0.5, y: 0.5, speed }],
    ['down left', { x: -0.5, y: 0.5, speed }],
    ['up left', { x: -0.5, y: -0.5, speed }],
  ])

  const changeDirection = (newDirection: Direction) => {
    direction = newDirection
  }

  const getCanvasObject = (): CanvasObjectType => {
    return {
      rect: {
        position: { x, y },
        size: { width, height },
      },
      color,
      speed,
      direction,
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
