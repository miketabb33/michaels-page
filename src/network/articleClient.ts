const articleRepoPath = 'https://raw.githubusercontent.com/miketabb33/michaels-articles/master'

export type ArticleMeta = {
  title: string
  path: string
  slug: string
  description: string
  thumbnailUrl: string
  createdOn: string
  hideInProd: boolean
}

export const fetchArticleManifest = async (): Promise<ArticleMeta[]> => {
  const response = await fetch(`${articleRepoPath}/manifest.json`)
  const data = (await response.json()) as []
  return data.map((d: ArticleMeta) => {
    const article: ArticleMeta = {
      title: d.title || '',
      slug: d.slug || '',
      path: d.path || '',
      description: d.description || '',
      thumbnailUrl: d.thumbnailUrl || '',
      createdOn: d.createdOn || '',
      hideInProd: d.hideInProd || false,
    }
    return article
  })
}

export const fetchArticle = async (path: string): Promise<string> => {
  const response = await fetch(`${articleRepoPath}/articles/${path}`)
  return response.text()
}
