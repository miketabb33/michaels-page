import { useEffect } from 'react'

type UsePageArgs = {
  title?: string
}

export const usePageController = ({ title }: UsePageArgs) => {
  const getDocumentTitle = (): string => {
    const base = 'Michael Tabb'
    if (!title) return base
    return `${base} | ${title}`
  }

  return { getDocumentTitle }
}

export const usePage = ({ title }: UsePageArgs) => {
  const { getDocumentTitle } = usePageController({ title })
  useEffect(() => {
    document.title = getDocumentTitle()
  }, [])
}
