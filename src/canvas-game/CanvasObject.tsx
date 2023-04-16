import { Direction } from '../types/Direction'
import { Rect } from '../types/Rect'

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
}

const CanvasObject = (init: CanvasObjectType): CanvasObjectController => {
  const hypotenuse = 1.41
  const width = init.rect.size.width
  const height = init.rect.size.height
  let x = init.rect.position.x
  let y = init.rect.position.y
  const speed = init.speed
  const color = init.color
  let direction = init.direction

  const move = (direction: Direction) => {
    const action = moveMap.get(direction)
    if (action) action()
  }

  const moveMap = new Map<Direction, () => void>([
    ['up', () => moveUp(speed)],
    ['down', () => moveDown(speed)],
    ['left', () => moveLeft(speed)],
    ['right', () => moveRight(speed)],
    [
      'up left',
      () => {
        moveUpLeft()
      },
    ],
    [
      'up right',
      () => {
        moveUpRight()
      },
    ],
    [
      'down left',
      () => {
        moveDownLeft()
      },
    ],
    [
      'down right',
      () => {
        moveDownRight()
      },
    ],
  ])

  const changeDirection = (newDirection: Direction) => {
    direction = newDirection
  }

  const moveLeft = (speed: number) => (x -= speed)
  const moveRight = (speed: number) => (x += speed)
  const moveUp = (speed: number) => (y -= speed)
  const moveDown = (speed: number) => (y += speed)

  const moveUpLeft = () => {
    moveUp(speed / hypotenuse)
    moveLeft(speed / hypotenuse)
  }

  const moveUpRight = () => {
    moveUp(speed / hypotenuse)
    moveRight(speed / hypotenuse)
  }

  const moveDownLeft = () => {
    moveDown(speed / hypotenuse)
    moveLeft(speed / hypotenuse)
  }

  const moveDownRight = () => {
    moveDown(speed / hypotenuse)
    moveRight(speed / hypotenuse)
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
  }
}

export default CanvasObject
