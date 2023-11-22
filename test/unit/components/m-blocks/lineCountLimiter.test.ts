import { lineCountLimiter } from '../../../../src/components/m-blocks/typography/lineCountLimiter'

describe('Line Count Limiter', () => {
  it('should have 2', () => {
    expect(lineCountLimiter(2)).toMatchSnapshot()
  })
  it('should have 4', () => {
    expect(lineCountLimiter(4)).toMatchSnapshot()
  })
})
