import { renderHook } from '@testing-library/react'
import * as UseRequestModule from '../../../../src/network/useRequest'
import { useInHome } from '../../../../src/components/home/Home'
import { ArticleMeta } from '../../../../src/network/articleClient'
import { ARTICLE_META_MOCK } from '../../__MOCKS__/articleMeta.mock'
import { USE_REQUEST_RESULT } from '../../__MOCKS__/useRequest.mock'

const USE_REQUEST = jest.spyOn(UseRequestModule, 'useRequest')

const createdOn1: ArticleMeta = { ...ARTICLE_META_MOCK, createdOn: '2021-09-08T23:03:41.000Z' }
const createdOn2: ArticleMeta = { ...ARTICLE_META_MOCK, createdOn: '2022-10-01T23:03:41.000Z' }
const createdOn3: ArticleMeta = { ...ARTICLE_META_MOCK, createdOn: '2018-01-22T23:03:41.000Z' }
const createdOn4: ArticleMeta = { ...ARTICLE_META_MOCK, createdOn: '2023-05-02T23:03:41.000Z' }
const createdOn5: ArticleMeta = { ...ARTICLE_META_MOCK, createdOn: '2023-11-20T23:03:41.000Z' }

beforeEach(jest.clearAllMocks)

describe('Use In Home', () => {
  it('should show articles when request returns articles', () => {
    USE_REQUEST.mockReturnValue({
      ...USE_REQUEST_RESULT(),
      data: [createdOn1],
    })
    const { result } = renderHook(useInHome)
    expect(result.current.showArticles).toEqual(true)
    expect(result.current.showLoading).toEqual(false)
  })
  it('should show articles when request returns loading', () => {
    USE_REQUEST.mockReturnValue({
      ...USE_REQUEST_RESULT(),
      isLoading: true,
    })
    const { result } = renderHook(useInHome)
    expect(result.current.showArticles).toEqual(false)
    expect(result.current.showLoading).toEqual(true)
  })
  it('should return sorted articles', () => {
    USE_REQUEST.mockReturnValue({
      ...USE_REQUEST_RESULT(),
      data: [createdOn1, createdOn2, createdOn3, createdOn4, createdOn5],
    })
    const { result } = renderHook(useInHome)
    expect(result.current.articles).toEqual([createdOn5, createdOn4, createdOn2, createdOn1, createdOn3])
  })
})
