import React from 'react'
import { ArticleMeta } from '../../network/articleClient'
import RouterLink from '../../router/RouterLink'
import Card, { CardContent } from '../m-blocks/Card'
import styled, { css } from 'styled-components'
import P from '../m-blocks/typography/P'
import Small from '../m-blocks/typography/Small'
import H3 from '../m-blocks/typography/H3'
import { desktopAndUp } from '../../styles/Responsive'

const ArticleContainer = styled.div`
  transition: all 0.15s;
  border-radius: ${({ theme }) => theme.spacing.medium};

  ${desktopAndUp(css`
    height: 55rem;
  `)}

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: ${({ theme }) => theme.shadow.blur};
    outline: ${({ theme }) => `solid ${theme.color.accent} 0.2rem`};
  }
`

const ArticleImage = styled.img`
  object-fit: cover;
`

type ArticleCardProps = {
  articleMeta: ArticleMeta
}

const ArticleCard = ({ articleMeta }: ArticleCardProps) => {
  const createdOnDate = new Date(articleMeta.createdOn)
  const formattedCreatedOn = createdOnDate.toLocaleDateString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div>
      <ArticleContainer>
        <RouterLink linkTo={`article/${articleMeta.slug}`}>
          <Card>
            <ArticleImage src={articleMeta.thumbnailUrl} />
            <CardContent>
              <H3 lineLimit={2} spacing={{ marginBottom: 's' }}>
                {articleMeta.title}
              </H3>
              <P lineLimit={5}>{articleMeta.description}</P>
              <Small spacing={{ marginTop: 's' }}>{formattedCreatedOn}</Small>
            </CardContent>
          </Card>
        </RouterLink>
      </ArticleContainer>
    </div>
  )
}

export default ArticleCard
