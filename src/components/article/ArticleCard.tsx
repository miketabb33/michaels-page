import React from 'react'
import { Article } from '../../network/articleClient'
import RouterLink from '../../router/RouterLink'
import Card, { CardContent } from '../m-blocks/Card'
import styled from 'styled-components'
import H4 from '../m-blocks/typography/H4'
import P from '../m-blocks/typography/P'
import H1 from '../m-blocks/typography/H1'
import Small from '../m-blocks/typography/Small'

type ArticleCardProps = {
  article: Article
}

const ArticleImage = styled.img`
  object-fit: cover;
`

const Container = styled.div`
  margin: 3rem;
`

const ArticleContainer = styled.div`
  transition: all 0.15s;
  border-radius: ${({ theme }) => theme.spacing.medium};

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: ${({ theme }) => theme.shadow.blur};
    outline: ${({ theme }) => `solid ${theme.color.accent} 0.2rem`};
  }
`

const ArticleCard = ({ article }: ArticleCardProps) => {
  const createdOnDate = new Date(article.createdOn)
  const formattedCreatedOn = createdOnDate.toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Container>
      <H1>Articles:</H1>
      <ArticleContainer>
        <RouterLink linkTo={`article/${article.slug}`}>
          <Card>
            <ArticleImage src={article.thumbnailUrl} />
            <CardContent>
              <H4>{article.title}</H4>
              <P>{article.description}</P>
              <Small spacing={{ marginTop: 'm' }}>{formattedCreatedOn}</Small>
            </CardContent>
          </Card>
        </RouterLink>
      </ArticleContainer>
    </Container>
  )
}

export default ArticleCard
