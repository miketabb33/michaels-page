import React from 'react'
import { useRequest } from '../../network/useRequest'
import { ArticleMeta, fetchArticleManifest } from '../../network/articleClient'
import ArticlesList, { ArticleListSkeleton } from '../article/ArticlesList'
import H1 from '../m-blocks/typography/H1'
import ProfileAndContentLayout from '../layouts/ProvileAndContentLayout'

const Home = () => {
  const { showArticles, showLoading, articles } = useInHome()

  return (
    <ProfileAndContentLayout>
      <H1>Articles:</H1>
      {showLoading && <ArticleListSkeleton count={6} />}
      {showArticles && <ArticlesList articles={articles} />}
    </ProfileAndContentLayout>
  )
}

export const useInHome = () => {
  const { data: articles, isLoading } = useRequest<ArticleMeta[]>({ request: fetchArticleManifest })

  const byNewestDate = (a: ArticleMeta, b: ArticleMeta) => {
    return new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime()
  }

  return {
    articles: articles?.sort(byNewestDate) ?? [],
    showArticles: !isLoading && !!articles,
    showLoading: isLoading,
  }
}

export default Home
