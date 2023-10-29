import { spacingController } from '../../../../src/components/m-blocks/spacingController'

describe('Spacing Controller', () => {
  it('should return empty string when nothing is passed', () => {
    const result = spacingController()
    expect(result).toEqual('')
  })
  it('should return xs padding', () => {
    const result = spacingController({ padding: 'xs' })
    expect(result[1]).toEqual('padding: 0.5rem;')
  })
  it('should return s paddingRight', () => {
    const result = spacingController({ paddingRight: 's' })
    expect(result[1]).toEqual('padding-right: 1rem;')
  })
  it('should return m marginBottom', () => {
    const result = spacingController({ marginBottom: 'm' })
    expect(result[1]).toEqual('margin-bottom: 2rem;')
  })
  it('should return l marginTop', () => {
    const result = spacingController({ marginTop: 'l' })
    expect(result[1]).toEqual('margin-top: 4rem;')
  })
  it('should return xl margin', () => {
    const result = spacingController({ margin: 'xl' })
    expect(result[1]).toEqual('margin: 8rem;')
  })
  it('should return m margin and l padding', () => {
    const result = spacingController({ margin: 'xl', padding: 'l' })
    expect(result[1]).toEqual('margin: 8rem;')
    expect(result[2]).toEqual('padding: 4rem;')
  })
})
