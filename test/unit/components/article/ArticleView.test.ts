import { renderHook } from '@testing-library/react'
import { useInArticleView } from '../../../../src/components/article/ArticleView'
import { ARTICLE_META_MOCK_1 } from '../../__MOCKS__/articleMeta.mock'
import * as UseRequestModule from '../../../../src/network/useRequest'
import { ARTICLE_BODY_MOCK_1, ARTICLE_BODY_MOCK_2 } from '../../__MOCKS__/articleBody.mock'
import { USE_REQUEST_RESULT } from '../../__MOCKS__/useRequest.mock'

const USE_REQUEST = jest.spyOn(UseRequestModule, 'useRequest')

describe('Use In Article View', () => {
  it('should show loading when request returns loading', () => {
    USE_REQUEST.mockReturnValue({ ...USE_REQUEST_RESULT(), isLoading: true })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.showLoading).toEqual(true)
    expect(result.current.showArticleBody).toEqual(false)
  })

  it('should show article body when request returns article', () => {
    USE_REQUEST.mockReturnValue({ ...USE_REQUEST_RESULT(), data: ARTICLE_BODY_MOCK_1 })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.showLoading).toEqual(false)
    expect(result.current.showArticleBody).toEqual(true)
  })

  it('should return arguments for no mock', () => {
    USE_REQUEST.mockReturnValue({ ...USE_REQUEST_RESULT(), data: null })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.articleBody).toEqual(null)
    expect(result.current.readingTime).toEqual(null)
  })
  it('should return arguments for mock 1', () => {
    USE_REQUEST.mockReturnValue({ ...USE_REQUEST_RESULT(), data: ARTICLE_BODY_MOCK_1 })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.articleBody).toEqual(ARTICLE_BODY_MOCK_1)
    expect(result.current.readingTime).toEqual(3)
  })
  it('should return arguments for mock 2', () => {
    USE_REQUEST.mockReturnValue({ ...USE_REQUEST_RESULT(), data: ARTICLE_BODY_MOCK_2 })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.articleBody).toEqual(ARTICLE_BODY_MOCK_2)
    expect(result.current.readingTime).toEqual(6)
  })
})
