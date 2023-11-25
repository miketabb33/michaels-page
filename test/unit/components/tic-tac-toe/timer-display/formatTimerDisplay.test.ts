import { formatTimerDisplay } from '../../../../../src/components/tic-tac-toe/timer-display/formatTimerDisplay'

describe('format timer display', () => {
  it('should return 0', () => {
    const result = formatTimerDisplay(0)
    expect(result).toEqual('00:00.00')
  })
  it('should return 0 when below 0', () => {
    const result = formatTimerDisplay(-10)
    expect(result).toEqual('00:00.00')
  })
  it('should return for 33', () => {
    const result = formatTimerDisplay(33)
    expect(result).toEqual('00:00.33')
  })
  it('should return for 99', () => {
    const result = formatTimerDisplay(99)
    expect(result).toEqual('00:00.99')
  })
  it('should return for 100', () => {
    const result = formatTimerDisplay(100)
    expect(result).toEqual('00:01.00')
  })
  it('should return for 355', () => {
    const result = formatTimerDisplay(355)
    expect(result).toEqual('00:03.55')
  })
  it('should return for 1088', () => {
    const result = formatTimerDisplay(1088)
    expect(result).toEqual('00:10.88')
  })
  it('should return for 6111', () => {
    const result = formatTimerDisplay(6111)
    expect(result).toEqual('01:01.11')
  })
  it('should return for 9999', () => {
    const result = formatTimerDisplay(9999)
    expect(result).toEqual('01:39.99')
  })
  it('should return for 55_555', () => {
    const result = formatTimerDisplay(55_555)
    expect(result).toEqual('09:15.55')
  })
  it('should return for 111_111', () => {
    const result = formatTimerDisplay(111_111)
    expect(result).toEqual('18:31.11')
  })
  it('should return for 400_000', () => {
    const result = formatTimerDisplay(400_000)
    expect(result).toEqual('66:40.00')
  })
  it('should return for 599_999', () => {
    const result = formatTimerDisplay(599_999)
    expect(result).toEqual('99:59.99')
  })
  it('should return for 600_000', () => {
    const result = formatTimerDisplay(600_000)
    expect(result).toEqual('++:00.00')
  })
  it('should return for 999_999', () => {
    const result = formatTimerDisplay(999_999)
    expect(result).toEqual('++:39.99')
  })
})
