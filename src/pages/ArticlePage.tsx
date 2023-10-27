import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { useRouter } from '../router/useRouter'
import { Article, fetchArticleManifest } from '../network/articleClient'
import { useRequest } from '../network/useRequest'
import ArticleBody from '../components/article/ArticleBody'
import { usePage } from './usePage'
import { PageContainer } from '../components/m-blocks/Layout'
import SpinnerView from '../components/m-blocks/SpinnerView'

const ArticlePage = () => {
  const { article, isLoading } = useInArticlePage()
  return <NavLayout>{isLoading ? <SpinnerView /> : <ArticleLoaded article={article} />}</NavLayout>
}

type ArticleSuccessProps = {
  article?: Article
}

const ArticleLoaded = ({ article }: ArticleSuccessProps) => {
  return (
    <PageContainer>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <ArticleBody path={article.path} />
        </>
      ) : (
        <h1>No Article Found</h1>
      )}
    </PageContainer>
  )
}

export const useInArticlePage = () => {
  const { useParams } = useRouter()
  const { slug } = useParams()

  const { data: articles, isLoading } = useRequest<Article[]>({ request: fetchArticleManifest })
  const article = articles?.find((article) => article.slug === slug)

  usePage({ title: article?.title || '', deps: [article] })

  return { article, isLoading }
}

export default ArticlePage
