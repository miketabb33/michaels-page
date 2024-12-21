import { renderHook } from '@testing-library/react'
import { useInNavMenuLink } from '../../../../../src/components/navigation/navigation-menu/NavMenuLink'
import * as UseRouterModule from '../../../../../src/router/useRouter'
import { USE_ROUTER_RESULT } from '../../../__MOCKS__/useRouter.mock'

const USE_ROUTER = jest.spyOn(UseRouterModule, 'useRouter')

describe('Use In Nav Menu Link', () => {
  it('should return selected when router pathname and linkTo match', () => {
    const link = '/anywhere'
    USE_ROUTER.mockReturnValue({ ...USE_ROUTER_RESULT, pathname: link })
    const { result } = renderHook(() => useInNavMenuLink(link))
    expect(result.current.isSelected).toEqual(true)
  })

  it('should return NOT selected when router pathname and linkTo are different', () => {
    const link = '/anywhere'
    USE_ROUTER.mockReturnValue({ ...USE_ROUTER_RESULT, pathname: 'nowhere' })
    const { result } = renderHook(() => useInNavMenuLink(link))
    expect(result.current.isSelected).toEqual(false)
  })
})
