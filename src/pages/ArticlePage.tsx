import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { useRouter } from '../router/useRouter'
import { Article, fetchArticleManifest } from '../network/articleClient'
import { useRequest } from '../network/useRequest'
import ArticleBody from '../components/article/ArticleBody'
import { usePage } from './usePage'

const ArticlePage = () => {
  const { article } = useInArticlePage()

  return (
    <NavLayout>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <ArticleBody path={article.path} />
        </>
      ) : (
        <h1>No Article Found</h1>
      )}
    </NavLayout>
  )
}

const useInArticlePage = () => {
  const { useParams } = useRouter()
  const { slug } = useParams()

  const { data: articles } = useRequest<Article[]>({ request: fetchArticleManifest })
  const article = articles?.find((article) => article.slug === slug)

  usePage({ title: article?.title || '', deps: [article] })

  return { article }
}

export default ArticlePage
