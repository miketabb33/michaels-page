const articleRepoPath = 'https://raw.githubusercontent.com/miketabb33/michaels-articles/master'

export type Article = {
  title: string
  path: string
  slug: string
  description: string
  thumbnailUrl: string
  createdOn: string
  readingTime: number
}

export const fetchArticleManifest = async (): Promise<Article[]> => {
  const response = await fetch(`${articleRepoPath}/manifest.json`)
  const data = (await response.json()) as []
  return data.map((d: Article) => {
    const article: Article = {
      title: d.title || '',
      slug: d.slug || '',
      path: d.path || '',
      description: d.description || '',
      thumbnailUrl: d.thumbnailUrl || '',
      createdOn: d.createdOn || '',
      readingTime: d.readingTime || 0,
    }
    return article
  })
}

export const fetchArticle = async (path: string): Promise<string> => {
  const response = await fetch(`${articleRepoPath}/articles/${path}`)
  return response.text()
}
