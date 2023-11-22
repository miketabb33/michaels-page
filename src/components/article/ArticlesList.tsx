import React from 'react'
import { ArticleMeta } from '../../network/articleClient'
import ArticleCard from './ArticleCard'
import H1 from '../m-blocks/typography/H1'
import styled, { css } from 'styled-components'
import { desktopAndUp } from '../../styles/Responsive'

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
    <>
      <H1>Articles:</H1>
      <Articles>
        {articles.map((article) => (
          <ArticleCard key={article.slug} articleMeta={article} />
        ))}
      </Articles>
    </>
  )
}

export default ArticlesList
