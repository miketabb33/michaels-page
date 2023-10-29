import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { useRouter } from '../router/useRouter'
import { Article, fetchArticleManifest } from '../network/articleClient'
import { useRequest } from '../network/useRequest'
import ArticleBody from '../components/article/ArticleBody'
import { usePage } from './usePage'
import { PageContainer } from '../components/m-blocks/Layout'
import SpinnerView from '../components/m-blocks/SpinnerView'
import H1 from '../components/m-blocks/typography/H1'

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
          <H1>{article.title}</H1>
          <ArticleBody path={article.path} />
        </>
      ) : (
        <H1>No Article Found</H1>
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
