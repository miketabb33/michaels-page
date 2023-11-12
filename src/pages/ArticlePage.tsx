import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { useRouter } from '../router/useRouter'
import { ArticleMeta, fetchArticleManifest } from '../network/articleClient'
import { useRequest } from '../network/useRequest'
import { usePage } from './usePage'
import SpinnerView from '../components/m-blocks/SpinnerView'
import ArticleView, { ArticleNotFound } from '../components/article/ArticleView'

const ArticlePage = () => {
  const { article, showLoading, showArticle, showNoArticle } = useInArticlePage()
  return (
    <NavLayout>
      {showLoading && <SpinnerView />}
      {showArticle && article && <ArticleView articleMeta={article} />}
      {showNoArticle && <ArticleNotFound />}
    </NavLayout>
  )
}

export const useInArticlePage = () => {
  const { useParams } = useRouter()
  const { slug } = useParams()

  const { data: articles, isLoading } = useRequest<ArticleMeta[]>({ request: fetchArticleManifest })
  const article = articles?.find((article) => article.slug === slug)

  usePage({ title: article?.title || '', deps: [article] })

  return {
    article,
    showLoading: isLoading,
    showArticle: !isLoading && !!article,
    showNoArticle: !isLoading && !article,
  }
}

export default ArticlePage
