import { desktopAndUp, tabletAndUp } from '../../src/Breakpoint'

describe('Breakpoint', () => {
  it('tablet and up', () => expect(tabletAndUp).toEqual('(min-width: 640px)'))
  it('desktop and up', () => expect(desktopAndUp).toEqual('(min-width: 1000px)'))
})
