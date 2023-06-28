import { KeyboardEventListener } from '../../../src/canvas-game/KeyboardEventListener'

const LISTENER_MOCK = jest.fn()

const ADD_EVENT_LISTENER_SPY = jest.spyOn(window, 'addEventListener')
const REMOVE_EVENT_LISTENER_SPY = jest.spyOn(window, 'removeEventListener')

beforeEach(jest.clearAllMocks)

describe('Keyboard Event Listener', () => {
  it('should add listeners', () => {
    const subject = new KeyboardEventListener()
    subject.addListener('keydown', LISTENER_MOCK)
    expect(subject.getRemoveListeners().length).toEqual(1)
    expect(ADD_EVENT_LISTENER_SPY).toHaveBeenCalledWith('keydown', LISTENER_MOCK)

    subject.addListener('keyup', LISTENER_MOCK)
    expect(subject.getRemoveListeners().length).toEqual(2)
  })

  it('should remove listeners', () => {
    const LISTENER_MOCK_1 = jest.fn()
    const LISTENER_MOCK_2 = jest.fn()

    const subject = new KeyboardEventListener()
    subject.addListener('keydown', LISTENER_MOCK_1)
    subject.addListener('keyup', LISTENER_MOCK_2)

    subject.removeListeners()

    expect(REMOVE_EVENT_LISTENER_SPY).toHaveBeenCalledWith('keydown', LISTENER_MOCK_1)
    expect(REMOVE_EVENT_LISTENER_SPY).toHaveBeenCalledWith('keyup', LISTENER_MOCK_2)

    expect(subject.getRemoveListeners()).toEqual([])
  })
})
