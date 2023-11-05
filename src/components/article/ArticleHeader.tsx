import React from 'react'
import { Article } from '../../network/articleClient'
import H1 from '../m-blocks/typography/H1'
import styled from 'styled-components'
import H4 from '../m-blocks/typography/H4'
import Small from '../m-blocks/typography/Small'
import P from '../m-blocks/typography/P'

const Container = styled.div`
  margin: ${({ theme }) => `${theme.spacing.xLarge} 0`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`

const ArticleLine = styled.div`
  height: 0.2rem;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.color.accent};
`

type ArticleHeaderProps = {
  article: Article
}

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const createdOnDate = new Date(article.createdOn)
  const formattedCreatedOn = createdOnDate.toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Container>
      <H1>{article.title}</H1>
      <H4>{article.description}</H4>
      <Row>
        <Small>{formattedCreatedOn}</Small>
        <P>{article.readingTime} min read</P>
      </Row>
      <img src={article.thumbnailUrl} />
      <ArticleLine />
    </Container>
  )
}

export default ArticleHeader
