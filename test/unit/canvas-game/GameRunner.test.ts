import { GameRunner } from '../../../src/canvas-game/GameRunner'

const ON_FRAME = jest.fn()
const SET_INTERVAL_SPY = jest.spyOn(window, 'setInterval')
const CLEAR_INTERVAL_SPY = jest.spyOn(window, 'clearInterval')

beforeEach(jest.clearAllMocks)

describe('Game Runner', () => {
  it('should start only once', () => {
    const gameRunner = GameRunner(ON_FRAME)
    gameRunner.start()
    expect(SET_INTERVAL_SPY).toHaveBeenCalledWith(ON_FRAME, 16.666666667)

    gameRunner.start()
    expect(SET_INTERVAL_SPY).toHaveBeenCalledTimes(1)
  })
  it('should stop when started', () => {
    const gameRunner = GameRunner(ON_FRAME)
    gameRunner.stop()

    expect(CLEAR_INTERVAL_SPY).not.toHaveBeenCalled()

    gameRunner.start()
    gameRunner.stop()

    expect(CLEAR_INTERVAL_SPY).toHaveBeenCalled()
  })
})
