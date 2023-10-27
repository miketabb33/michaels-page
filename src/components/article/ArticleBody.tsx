import React from 'react'
import { fetchArticle } from '../../network/articleClient'
import { useRequest } from '../../network/useRequest'
import MarkdownToArticleBody from './MarkdownToArticleBody'

type ArticleBodyProps = {
  path: string
}

const ArticleBody = ({ path }: ArticleBodyProps) => {
  const { data: articleBody } = useRequest<string>({ request: () => fetchArticle(path) })

  return <>{articleBody ? <MarkdownToArticleBody markdown={articleBody} /> : <p>...</p>}</>
}

export default ArticleBody
