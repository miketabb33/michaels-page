import { Point } from '../types/Point'
import { Size } from '../types/Size'

export type Rect = {
  position: Point
  size: Size
}

export const getRectEdges = (rect: Rect) => {
  const top = rect.position.y
  const right = rect.position.x + rect.size.width
  const bottom = rect.position.y + rect.size.height
  const left = rect.position.x
  return { top, right, bottom, left }
}

export const collisionDetection = (rect1: Rect, rect2: Rect): boolean => {
  const { top: top1, right: right1, bottom: bottom1, left: left1 } = getRectEdges(rect1)
  const { top: top2, right: right2, bottom: bottom2, left: left2 } = getRectEdges(rect2)

  const isIntersectingAlongX = top1 < bottom2 && bottom1 > top2
  const isIntersectingAlongY = right1 > left2 && left1 < right2
  if (isIntersectingAlongY && isIntersectingAlongX) return true

  return false
}
