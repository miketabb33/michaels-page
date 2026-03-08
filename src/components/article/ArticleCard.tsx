import React from 'react'
import { ArticleMeta } from '../../network/articleClient'
import RouterLink from '../../router/RouterLink'
import Card, { CardContent } from '../m-blocks/Card'
import styled from 'styled-components'
import P from '../m-blocks/typography/P'
import H3 from '../m-blocks/typography/H3'
import { PATH_VALUES } from '../../router/pathValues'

const ArticleContainer = styled.div`
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 1.4rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 48px ${({ theme }) => theme.color.hover};
  }
`

const ArticleImage = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1.7799;
`

const DateLabel = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
  opacity: 0.85;
  margin-bottom: 0.9rem;
`

type ArticleCardProps = {
  articleMeta: ArticleMeta
}

const ArticleCard = ({ articleMeta }: ArticleCardProps) => {
  const createdOnDate = new Date(articleMeta.createdOn)
  const formattedCreatedOn = createdOnDate.toLocaleDateString('default', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div>
      <ArticleContainer>
        <RouterLink linkTo={PATH_VALUES.article(articleMeta.slug)}>
          <Card>
            <ArticleImage src={articleMeta.thumbnailUrl} />
            <CardContent>
              <DateLabel>{formattedCreatedOn}</DateLabel>
              <H3 $lineLimit={2} $spacing={{ marginBottom: 'xs' }}>
                {articleMeta.title}
              </H3>
              <P>{articleMeta.description}</P>
            </CardContent>
          </Card>
        </RouterLink>
      </ArticleContainer>
    </div>
  )
}

export default ArticleCard
