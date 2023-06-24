import { navConfig } from '../../../src/config/navConfig'

describe('Nav Config', () => {
  it('should match snapshot', () => {
    expect(navConfig).toMatchSnapshot()
  })
})
