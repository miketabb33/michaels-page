import { useEffect } from 'react'
import { EventConfig, eventController } from '../eventController'

export const KeyboardController = () => {
  let isPressingLeft = false
  let isPressingRight = false

  const detectKey = (e: KeyboardEvent) => {
    const isDKey = e.code === 'KeyD'
    const isArrowRightKey = e.code === 'ArrowRight'

    const isAKey = e.code === 'KeyA'
    const isArrowLeftKey = e.code === 'ArrowLeft'

    const isDetectingLeft = isAKey || isArrowLeftKey
    const isDetectingRight = isDKey || isArrowRightKey

    return {
      isDetectingLeft: isDetectingLeft,
      isDetectingRight: isDetectingRight,
    }
  }

  const onKeydown = (e: Event) => {
    const result = detectKey(e as KeyboardEvent)
    if (result.isDetectingLeft) isPressingLeft = true
    if (result.isDetectingRight) isPressingRight = true
  }

  const onKeyup = (e: Event) => {
    const result = detectKey(e as KeyboardEvent)
    if (result.isDetectingLeft) isPressingLeft = false
    if (result.isDetectingRight) isPressingRight = false
  }

  const events: EventConfig[] = [
    { name: 'keydown', action: onKeydown },
    { name: 'keyup', action: onKeyup },
  ]

  const { addEventListeners, removeEventListeners } = eventController({
    events,
  })

  useEffect(() => {
    addEventListeners()
    return () => {
      removeEventListeners()
    }
  }, [])

  return {
    isPressingLeftKey: () => isPressingLeft,
    isPressingRightKey: () => isPressingRight,
  }
}
