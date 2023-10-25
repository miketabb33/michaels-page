import { useEffect } from 'react'

type UsePageArgs = {
  title?: string
  deps?: React.DependencyList | undefined
}

export const usePageController = ({ title }: UsePageArgs) => {
  const getDocumentTitle = (): string => {
    const base = 'Michael Tabb'
    if (!title) return base
    return `${base} | ${title}`
  }

  return { getDocumentTitle }
}

export const usePage = ({ title, deps = [] }: UsePageArgs) => {
  const { getDocumentTitle } = usePageController({ title })
  useEffect(() => {
    document.title = getDocumentTitle()
  }, deps)
}
