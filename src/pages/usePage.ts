import { useEffect } from 'react'
import { useRouter } from '../router/useRouter'

type MetaTagSelectorKey = 'image' | 'description' | 'title' | 'url'

const metaTagSelectorMap = new Map<MetaTagSelectorKey, string>([
  ['description', 'meta[property=og\\:description]'],
  ['title', 'meta[property=og\\:title]'],
  ['image', 'meta[property=og\\:image]'],
  ['url', 'meta[property=og\\:url]'],
])

type usePageControllerArgs = {
  title?: string
}

export const usePageController = ({ title }: usePageControllerArgs) => {
  const { hostname, pathname } = useRouter()

  const getDocumentTitle = (): string => {
    const base = 'Michael Tabb'
    if (!title) return base
    return `${base} | ${title}`
  }

  const getUrl = () => {
    const safePathname = pathname === '/' ? '' : pathname
    return `${hostname}${safePathname}`
  }

  const setMetaTag = (key: MetaTagSelectorKey, value: string) => {
    const selector = metaTagSelectorMap.get(key)
    if (!selector) throw new Error(`Provided an invalid meta tag selector key: ${key}`)
    const query = document.querySelectorAll(selector)[0]
    if (!query) throw new Error(`Unable to find document tag for: ${selector}`)
    query.setAttribute('content', value)
  }

  return { getDocumentTitle, getUrl, setMetaTag }
}

const DESCRIPTION_DEFAULT =
  'I specialize in delivering quality software. Explore insightful articles for valuable industry knowledge. Elevate your digital presence!'
const IMAGE_DEFAULT = 'https://michael-tabb.com/images/logo.png'

type UsePageArgs = {
  title?: string
  image?: string
  description?: string
  deps?: React.DependencyList | undefined
}

export const usePage = ({ title, image, description, deps = [] }: UsePageArgs) => {
  const { getDocumentTitle, setMetaTag, getUrl } = usePageController({ title })
  useEffect(() => {
    setTitleMetaData()
    setUrlMetaData()
    setMetaTag('image', image || IMAGE_DEFAULT)
    setMetaTag('description', description || DESCRIPTION_DEFAULT)
  }, deps)

  const setTitleMetaData = () => {
    const fullTitle = getDocumentTitle()
    document.title = fullTitle
    setMetaTag('title', fullTitle)
  }

  const setUrlMetaData = () => {
    const url = getUrl()
    setMetaTag('url', url)
  }
}
