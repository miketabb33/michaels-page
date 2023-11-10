import React from 'react'
import MarkdownToArticleBody from './MarkdownToArticleBody'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxLarge};
`

type ArticleBodyProps = {
  articleBody: string | null
}

const ArticleBody = ({ articleBody }: ArticleBodyProps) => {
  return <Container>{articleBody ? <MarkdownToArticleBody markdown={articleBody} /> : <p>...</p>}</Container>
}

export default ArticleBody
