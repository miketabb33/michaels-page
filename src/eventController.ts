type EventName = 'mousedown' | 'mouseup' | 'mouseleave' | 'touchstart' | 'touchend' | 'resize' | 'keydown' | 'keyup'

export type EventConfig = {
  name: EventName
  action: (e: Event) => void
}

type EventController = {
  target?: HTMLElement | null
  events: EventConfig[]
}

export const eventController = ({ target, events }: EventController) => {
  const addEventListeners = () => {
    events.map((event) => {
      if (target) {
        target.addEventListener(event.name, event.action)
      } else {
        addEventListener(event.name, event.action)
      }
    })
  }

  const removeEventListeners = () => {
    events.map((event) => {
      if (target) {
        target.removeEventListener(event.name, event.action)
      } else {
        removeEventListener(event.name, event.action)
      }
    })
  }
  return {
    addEventListeners,
    removeEventListeners,
  }
}
