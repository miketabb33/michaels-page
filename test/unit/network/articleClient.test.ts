import { fetchArticle, fetchArticleManifest } from '../../../src/network/articleClient'

const FETCH_MOCK = jest.fn()
global.fetch = FETCH_MOCK

beforeEach(jest.clearAllMocks)

describe('Fetch Article Manifest', () => {
  const TITLE_1 = 'any-title-1'
  const TITLE_2 = 'any-title-2'
  const PATH_1 = 'test/path.md'
  const PATH_2 = 'other/path.md'

  const json = () => [
    { title: TITLE_1, path: PATH_1 },
    { title: TITLE_2, path: PATH_2 },
  ]

  it('should call method with correct params', async () => {
    FETCH_MOCK.mockReturnValueOnce({ json })
    await fetchArticleManifest()
    expect(FETCH_MOCK).toHaveBeenCalledWith(
      'https://raw.githubusercontent.com/miketabb33/michaels-articles/master/manifest.json'
    )
  })

  it('should return an array of articles', async () => {
    FETCH_MOCK.mockReturnValueOnce({ json })
    const results = await fetchArticleManifest()

    expect(results[0].title).toEqual(TITLE_1)
    expect(results[0].path).toEqual(PATH_1)
    expect(results[1].title).toEqual(TITLE_2)
    expect(results[1].path).toEqual(PATH_2)
  })
})

describe('Fetch Article', () => {
  const text = () => 'This is data text'

  it('should call method with correct params', async () => {
    FETCH_MOCK.mockReturnValueOnce({ text })
    await fetchArticle('some-article')
    expect(FETCH_MOCK).toHaveBeenCalledWith(
      'https://raw.githubusercontent.com/miketabb33/michaels-articles/master/articles/some-article'
    )
  })

  it('should return a string', async () => {
    FETCH_MOCK.mockReturnValueOnce({ text })
    const results = await fetchArticle('some-article')
    expect(results).toEqual('This is data text')
  })
})
