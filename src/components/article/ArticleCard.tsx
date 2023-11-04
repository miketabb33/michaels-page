import React from 'react'
import { Article } from '../../network/articleClient'
import RouterLink from '../../router/RouterLink'
import Card, { CardContent } from '../m-blocks/Card'
import styled from 'styled-components'
import H4 from '../m-blocks/typography/H4'
import P from '../m-blocks/typography/P'
import H1 from '../m-blocks/typography/H1'

type ArticleCardProps = {
  article: Article
}

const ArticleImage = styled.img`
  object-fit: cover;
`

const Container = styled.div`
  margin: 3rem;
`

const Date = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.accent};
  margin-top: ${({ theme }) => theme.spacing.medium};
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
              <Date>{article.createdOn}</Date>
            </CardContent>
          </Card>
        </RouterLink>
      </ArticleContainer>
    </Container>
  )
}

export default ArticleCard
