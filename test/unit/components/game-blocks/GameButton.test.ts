import React from 'react'
import { useGameButton } from '../../../../src/components/game-blocks/GameButton'
import { EVENT_MOCK } from '../../__MOCKS__/event.mock'

const ON_PRESS_START = jest.fn()
const ON_PRESS_END = jest.fn()

type TestEventListenerElement = {
  addEventListener: (name: string, method: () => void) => void
  listeners: TestEventListener[]
}

type TestEventListener = {
  name: string
  method: (e?: Event) => void
}

const current: TestEventListenerElement = {
  listeners: [],
  addEventListener: function (name: string, method: () => void) {
    this.listeners.push({ name, method })
  },
}

beforeEach(jest.clearAllMocks)

describe('Use Game Button', () => {
  it('should return button ref as null', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null })
    const { buttonRef } = useGameButton(ON_PRESS_START, ON_PRESS_END)
    expect(buttonRef.current).toBeNull()
  })
  it('should add event listeners when current has a value', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current })
    const { buttonRef, addEventListeners } = useGameButton(ON_PRESS_START, ON_PRESS_END)
    addEventListeners()
    const testElement = buttonRef.current as unknown as TestEventListenerElement

    expect(testElement.listeners[0].name).toEqual('mousedown')
    expect(testElement.listeners[1].name).toEqual('mouseup')
    expect(testElement.listeners[2].name).toEqual('mouseleave')
    expect(testElement.listeners[3].name).toEqual('touchstart')
    expect(testElement.listeners[4].name).toEqual('touchend')
  })
  it('should NOT add event listeners when current does NOT have a value', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null })
    const { buttonRef, addEventListeners } = useGameButton(ON_PRESS_START, ON_PRESS_END)
    addEventListeners()
    const testElement = buttonRef.current as unknown as TestEventListenerElement
    expect(testElement).toBeNull()
  })
  it('should invoke on press start when press started is called and event is cancelable', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current })
    const { buttonRef, addEventListeners } = useGameButton(ON_PRESS_START, ON_PRESS_END)
    addEventListeners()
    const testElement = buttonRef.current as unknown as TestEventListenerElement

    testElement.listeners[0].method({ ...EVENT_MOCK, cancelable: true })
    expect(ON_PRESS_START).toHaveBeenCalled()
  })
  it('should NOT invoke on press start when press started is called and event is NOT cancelable', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current })
    const { buttonRef, addEventListeners } = useGameButton(ON_PRESS_START, ON_PRESS_END)
    addEventListeners()
    const testElement = buttonRef.current as unknown as TestEventListenerElement

    testElement.listeners[0].method({ ...EVENT_MOCK, cancelable: false })
    expect(ON_PRESS_START).not.toHaveBeenCalled()
  })
  it('should invoke on press end when press ended is called', () => {
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current })
    const { buttonRef, addEventListeners } = useGameButton(ON_PRESS_START, ON_PRESS_END)
    addEventListeners()
    const testElement = buttonRef.current as unknown as TestEventListenerElement

    testElement.listeners[1].method(EVENT_MOCK)
    expect(ON_PRESS_END).toHaveBeenCalled()
  })
})
