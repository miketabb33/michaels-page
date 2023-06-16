import { getEnv } from '../../../../src/config/environments/currentEnv'

describe('Get Env', () => {
  it('should match snapshot for production env', () => {
    expect(getEnv('production')).toMatchSnapshot()
  })
  it('should match snapshot for other env', () => {
    expect(getEnv('develop')).toMatchSnapshot()
  })
})
