import { usePageController } from '../../../src/pages/usePage'

describe('Use Page Controller', () => {
  it('should return default title', () => {
    const { getDocumentTitle } = usePageController({})
    expect(getDocumentTitle()).toEqual('Michael Tabb')
  })
  it('should return title', () => {
    const { getDocumentTitle } = usePageController({ title: 'some-title' })
    expect(getDocumentTitle()).toEqual('Michael Tabb | some-title')
  })
})
