import { soccerField } from '../../../../../src/canvas-game/pong/config/soccerFieldConfig'

describe('Soccer Field Config', () => {
  it('should match snapshot', () => {
    expect(soccerField(1000)).toMatchSnapshot()
  })
})
