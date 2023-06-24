import { Breakpoint, MQ } from '../../src/Breakpoint'

describe('Breakpoint', () => {
  it('mobileS', () => expect(MQ(Breakpoint.mobileS)).toEqual('(min-width: 320px)'))
  it('mobileM', () => expect(MQ(Breakpoint.mobileM)).toEqual('(min-width: 375px)'))
  it('mobileL', () => expect(MQ(Breakpoint.mobileL)).toEqual('(min-width: 425px)'))
  it('tablet', () => expect(MQ(Breakpoint.tablet)).toEqual('(min-width: 768px)'))
  it('laptop', () => expect(MQ(Breakpoint.laptop)).toEqual('(min-width: 1024px)'))
  it('laptopL', () => expect(MQ(Breakpoint.laptopL)).toEqual('(min-width: 1440px)'))
  it('desktop', () => expect(MQ(Breakpoint.desktop)).toEqual('(min-width: 2560px)'))
})
