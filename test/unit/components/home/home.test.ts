import { renderHook } from '@testing-library/react'
import { useRequest } from '../../../../src/network/useRequest'
import { useInHome } from '../../../../src/components/home/Home'

jest.mock('../../../../src/network/useRequest')

const USE_REQUEST = useRequest as jest.Mock

const createdOn1 = { createdOn: '2021-09-08T23:03:41.000Z' }
const createdOn2 = { createdOn: '2022-10-01T23:03:41.000Z' }
const createdOn3 = { createdOn: '2018-01-22T23:03:41.000Z' }
const createdOn4 = { createdOn: '2023-05-02T23:03:41.000Z' }
const createdOn5 = { createdOn: '2023-11-20T23:03:41.000Z' }

const USE_REQUEST_MOCK = { data: [createdOn1, createdOn2, createdOn3, createdOn4, createdOn5] }
USE_REQUEST.mockReturnValue(USE_REQUEST_MOCK)

describe('Use In Home', () => {
  it('should return sorted articles', () => {
    const { result } = renderHook(useInHome)
    if (!result.current.articles) throw 'articles expected'
    expect(result.current.articles).toEqual([createdOn5, createdOn4, createdOn2, createdOn1, createdOn3])
  })
})
