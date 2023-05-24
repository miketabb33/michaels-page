import { CanvasObjectController } from '../canvasObjectController'
import { Rect } from '../rect'
import { DirectionValue } from '../../types/DirectionValue'

export const calcCircularBounce = (subject: CanvasObjectController, test: CanvasObjectController): DirectionValue => {
  const collisionPoint = horizontalRelativeCollisionPoint(subject.getCanvasObject().rect, test.getCanvasObject().rect)
  return convertPercentageToDirection(collisionPoint)
}

export const horizontalRelativeCollisionPoint = (subject: Rect, test: Rect): number => {
  const testRectCenter = test.position.x + test.size.width / 2
  const translatedTCenter = testRectCenter - subject.position.x
  return translatedTCenter / subject.size.width
}

export const convertPercentageToDirection = (percentage: number): DirectionValue => {
  const x = percentage * 2 - 1
  let y = (1 - Math.abs(x)) * -1
  if (y >= 0) y = y - 0.15
  return { x, y }
}
