import { Direction } from '../types/Direction'
import { Rect } from '../types/Rect'

export type CanvasObjectType = {
  rect: Rect
  color: string
  speed: number
}

type CanvasObjectController = {
  getCanvasObject: () => CanvasObjectType
  move: (direction: Direction) => void
}

const CanvasObject = (init: CanvasObjectType): CanvasObjectController => {
  const width = init.rect.size.width
  const height = init.rect.size.height
  let x = init.rect.position.x
  let y = init.rect.position.y
  const speed = init.speed
  const color = init.color

  const move = (direction: Direction) => {
    const action = moveMap.get(direction)
    if (action) action()
  }

  const moveMap = new Map<Direction, () => void>([
    ['up', () => (y -= speed)],
    ['down', () => (y += speed)],
    ['left', () => (x -= speed)],
    ['right', () => (x += speed)],
  ])

  const getCanvasObject = (): CanvasObjectType => {
    return {
      rect: {
        position: { x, y },
        size: { width, height },
      },
      color,
      speed,
    }
  }

  return {
    getCanvasObject,
    move,
  }
}

export default CanvasObject
