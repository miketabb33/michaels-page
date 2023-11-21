import React from 'react'
import { ArticleMeta } from '../../network/articleClient'
import ArticleCard from './ArticleCard'
import H1 from '../m-blocks/typography/H1'
import styled from 'styled-components'

const Articles = styled.div`
  margin: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 3rem;
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
