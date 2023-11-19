import { usePageController } from '../../../src/pages/usePage'
import { useRouter } from '../../../src/router/useRouter'

jest.mock('../../../src/router/useRouter')
const USE_ROUTER = useRouter as jest.Mock

USE_ROUTER.mockReturnValue({ hostname: '', pathname: '' })

beforeEach(jest.clearAllMocks)

describe('Use Page Controller', () => {
  it('should return default title', () => {
    const { getDocumentTitle } = usePageController({})
    expect(getDocumentTitle()).toEqual('Michael Tabb')
  })
  it('should return title', () => {
    const { getDocumentTitle } = usePageController({ title: 'some-title' })
    expect(getDocumentTitle()).toEqual('Michael Tabb | some-title')
  })
  it('should get url for root domain', () => {
    USE_ROUTER.mockReturnValue({ hostname: 'michael-tabb.com', pathname: '/' })
    const { getUrl } = usePageController({})
    expect(getUrl()).toEqual('michael-tabb.com')
  })
  it('should get url for domain with path', () => {
    USE_ROUTER.mockReturnValue({ hostname: 'michael-tabb.com', pathname: '/any/path/name' })
    const { getUrl } = usePageController({})
    expect(getUrl()).toEqual('michael-tabb.com/any/path/name')
  })
})
