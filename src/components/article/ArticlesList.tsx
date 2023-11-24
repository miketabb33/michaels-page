import React from 'react'
import { ArticleMeta } from '../../network/articleClient'
import ArticleCard from './ArticleCard'
import styled, { css } from 'styled-components'
import { desktopAndUp } from '../../styles/Responsive'
import ArticleCardSkeleton from './ArticleCardSkeleton'

const Articles = styled.div`
  margin: 0 3rem;
  display: grid;

  grid-template-columns: 1fr;
  row-gap: 2rem;

  ${desktopAndUp(css`
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 3rem;
  `)}
`

type ArticlesListProps = {
  articles: ArticleMeta[]
}

const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <Articles>
      {articles.map((article) => (
        <ArticleCard key={article.slug} articleMeta={article} />
      ))}
    </Articles>
  )
}

type ArticleListSkeletonProps = {
  count: number
}

export const ArticleListSkeleton = ({ count }: ArticleListSkeletonProps) => (
  <Articles>
    {[...(Array(count) as undefined[])].map((_: undefined, i: number) => (
      <ArticleCardSkeleton key={i} />
    ))}
  </Articles>
)

export default ArticlesList
