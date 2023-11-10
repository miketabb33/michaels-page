import { renderHook } from '@testing-library/react'
import { useInArticleView } from '../../../../src/components/article/ArticleView'
import { ARTICLE_META_MOCK_1 } from '../../__MOCKS__/articleMeta.mock'
import { useRequest } from '../../../../src/network/useRequest'
import { ARTICLE_BODY_MOCK_1, ARTICLE_BODY_MOCK_2 } from '../../__MOCKS__/articleBody.mock'

jest.mock('../../../../src/network/useRequest')
const USE_REQUEST = useRequest as jest.Mock

describe('Use In Article View', () => {
  it('should return arguments for no mock', () => {
    USE_REQUEST.mockReturnValue({ data: null })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.articleBody).toEqual(null)
    expect(result.current.readingTime).toEqual(null)
  })
  it('should return arguments for mock 1', () => {
    USE_REQUEST.mockReturnValue({ data: ARTICLE_BODY_MOCK_1 })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.articleBody).toEqual(ARTICLE_BODY_MOCK_1)
    expect(result.current.readingTime).toEqual(3)
  })
  it('should return arguments for mock 2', () => {
    USE_REQUEST.mockReturnValue({ data: ARTICLE_BODY_MOCK_2 })
    const { result } = renderHook(() => useInArticleView(ARTICLE_META_MOCK_1))
    expect(result.current.articleBody).toEqual(ARTICLE_BODY_MOCK_2)
    expect(result.current.readingTime).toEqual(6)
  })
})
