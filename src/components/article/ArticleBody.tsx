import React from 'react'
import { fetchArticle } from '../../network/articleClient'
import { useRequest } from '../../network/useRequest'

type ArticleBodyProps = {
  path: string
}

const ArticleBody = ({ path }: ArticleBodyProps) => {
  const { data: articleBody } = useRequest<string>({ request: () => fetchArticle(path) })

  return <p>{articleBody}</p>
}

export default ArticleBody
