import React from 'react'
import { fetchArticle } from '../../network/articleClient'
import { useRequest } from '../../network/useRequest'
import MarkdownToArticleBody from './MarkdownToArticleBody'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxLarge};
`

type ArticleBodyProps = {
  path: string
}

const ArticleBody = ({ path }: ArticleBodyProps) => {
  const { data: articleBody } = useRequest<string>({ request: () => fetchArticle(path) })

  return <Container>{articleBody ? <MarkdownToArticleBody markdown={articleBody} /> : <p>...</p>}</Container>
}

export default ArticleBody
