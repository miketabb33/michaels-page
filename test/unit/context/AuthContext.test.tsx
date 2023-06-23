import { act, renderHook } from '@testing-library/react'
import { useAuthProvider } from '../../../src/context/AuthContext'
import { initAnalyticsWhenSupported } from '../../../src/analytics/initAnalytics'

jest.mock('../../../src/analytics/initAnalytics')

const INIT_ANALYTICS_WHEN_SUPPORTED = initAnalyticsWhenSupported as jest.Mock

beforeEach(jest.clearAllMocks)

describe('Use Auth Provider', () => {
  it('should init', () => {
    const { result } = renderHook(useAuthProvider)
    expect(result.current.user.id).toEqual('')
  })
  it('should load user from local storage when id exists', () => {
    const GET_ITEM = jest.spyOn(Storage.prototype, 'getItem')
    const USER_ID = 'USER_ID'
    GET_ITEM.mockImplementationOnce(() => USER_ID)
    const { result } = renderHook(useAuthProvider)
    act(result.current.loadUser)
    expect(result.current.user.id).toEqual(USER_ID)
    expect(GET_ITEM).toBeCalledWith('user-id')
    expect(INIT_ANALYTICS_WHEN_SUPPORTED).toHaveBeenCalled()
  })
  it("should create id and local storage when id doesn't exists", () => {
    const SET_ITEM = jest.spyOn(Storage.prototype, 'setItem')
    const { result } = renderHook(useAuthProvider)
    act(result.current.loadUser)
    expect(result.current.user.id.length).toEqual(36)
    expect(SET_ITEM).toBeCalledWith('user-id', result.current.user.id)
    expect(INIT_ANALYTICS_WHEN_SUPPORTED).toHaveBeenCalled()
  })
})
