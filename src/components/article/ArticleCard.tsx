import React from 'react'
import { Article } from '../../network/articleClient'
import RouterLink from '../../router/RouterLink'

type ArticleCardProps = {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return <RouterLink linkTo={`article/${article.slug}`}>{article.title}</RouterLink>
}

export default ArticleCard
