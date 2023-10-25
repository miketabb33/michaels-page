const articleRepoPath = 'https://raw.githubusercontent.com/miketabb33/michaels-articles/master'

type Article = {
  title: string
  path: string
}

export const fetchArticleManifest = async (): Promise<Article[]> => {
  const response = await fetch(`${articleRepoPath}/manifest.json`)
  const data = (await response.json()) as []
  return data.map((d: Article) => {
    const article: Article = {
      title: d.title || '',
      path: d.path || '',
    }
    return article
  })
}

export const fetchArticle = async (path: string): Promise<string> => {
  const response = await fetch(`${articleRepoPath}/articles/${path}`)
  return response.text()
}
