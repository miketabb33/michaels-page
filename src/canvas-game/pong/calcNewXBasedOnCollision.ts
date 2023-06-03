import { Rect } from '../rect'

type CalcNewXBasedOnCollision = {
  subject: Rect
  test: Rect
}

export const calcNewXBasedOnCollision = ({ subject, test }: CalcNewXBasedOnCollision): number => {
  const collisionPointPercentage = horizontalRelativeCollisionPoint(subject, test)
  return convertPercentageToX(collisionPointPercentage)
}

const horizontalRelativeCollisionPoint = (subject: Rect, test: Rect): number => {
  const testRectCenter = test.position.x + test.size.width / 2
  const translatedTCenter = testRectCenter - subject.position.x
  return translatedTCenter / subject.size.width
}

const convertPercentageToX = (percentage: number) => percentage * 2 - 1
