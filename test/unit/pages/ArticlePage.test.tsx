import { renderHook } from '@testing-library/react'
import { useInArticlePage } from '../../../src/pages/ArticlePage'
import { useRouter } from '../../../src/router/useRouter'
import { useRequest } from '../../../src/network/useRequest'
import { ARTICLES_META_MOCK, ARTICLE_META_MOCK_2 } from '../__MOCKS__/articleMeta.mock'
import { usePage } from '../../../src/pages/usePage'

jest.mock('../../../src/router/useRouter')
const USE_PARAMS = useRouter as jest.Mock

jest.mock('../../../src/network/useRequest')
const USE_REQUEST = useRequest as jest.Mock

jest.mock('../../../src/pages/usePage')
const USE_PAGE = usePage as jest.Mock

USE_REQUEST.mockReturnValue({ data: ARTICLES_META_MOCK, isLoading: false })
USE_PARAMS.mockReturnValue({
  useParams: () => ({
    slug: ARTICLE_META_MOCK_2.slug,
  }),
})

beforeEach(jest.clearAllMocks)

describe('Use In Article Page', () => {
  it('should fetch, find, and return article based on slug', () => {
    const { result } = renderHook(useInArticlePage)
    expect(result.current.article).toEqual(ARTICLE_META_MOCK_2)
  })
  it('should invoke page title with article title when exists', () => {
    renderHook(useInArticlePage)
    expect(USE_PAGE).toHaveBeenCalledWith({
      deps: [ARTICLE_META_MOCK_2],
      title: ARTICLE_META_MOCK_2.title,
    })
  })
  it('should show loading when is loading is true', () => {
    USE_REQUEST.mockReturnValue({ data: null, isLoading: true })
    const { result } = renderHook(useInArticlePage)
    expect(result.current.showLoading).toEqual(true)
    expect(result.current.showNoArtilcle).toEqual(false)
    expect(result.current.showArticle).toEqual(false)
  })
  it('should show article when is loading is false and article is found', () => {
    USE_REQUEST.mockReturnValue({ data: ARTICLES_META_MOCK, isLoading: false })
    const { result } = renderHook(useInArticlePage)
    expect(result.current.showLoading).toEqual(false)
    expect(result.current.showNoArtilcle).toEqual(false)
    expect(result.current.showArticle).toEqual(true)
  })
  it('should show no article when is loading is false and no article', () => {
    USE_REQUEST.mockReturnValue({ data: null, isLoading: false })
    const { result } = renderHook(useInArticlePage)
    expect(result.current.showLoading).toEqual(false)
    expect(result.current.showNoArtilcle).toEqual(true)
    expect(result.current.showArticle).toEqual(false)
  })
})
