import React from 'react'
import { ArticleMeta } from '../../network/articleClient'
import RouterLink from '../../router/RouterLink'
import Card, { CardContent } from '../m-blocks/Card'
import styled, { css } from 'styled-components'
import P from '../m-blocks/typography/P'
import H3 from '../m-blocks/typography/H3'
import { desktopAndUp } from '../../styles/Responsive'
import { PATH_VALUES } from '../../router/pathValues'

export const ARTICLE_CARD_HEIGHT = '52rem'

const ArticleContainer = styled.div`
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  ${desktopAndUp(css`
    height: ${ARTICLE_CARD_HEIGHT};
  `)}

  &:hover {
    transform: translateY(-0.4rem);
    box-shadow: 0 12px 40px rgba(124, 58, 237, 0.15);
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
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.color.primary};
  opacity: 0.6;
  margin-bottom: 0.8rem;
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
              <P $lineLimit={4}>{articleMeta.description}</P>
            </CardContent>
          </Card>
        </RouterLink>
      </ArticleContainer>
    </div>
  )
}

export default ArticleCard
