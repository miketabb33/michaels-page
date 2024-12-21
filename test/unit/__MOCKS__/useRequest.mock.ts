import { UseRequestResult } from '../../../src/network/useRequest'

export const USE_REQUEST_RESULT = <T>(): UseRequestResult<T> => {
  return {
    data: null,
    error: null,
    isLoading: false,
    callRequest: () => {},
  }
}
