import React from 'react'
import { useRequest } from '../../network/useRequest'
import { ArticleMeta, fetchArticleManifest } from '../../network/articleClient'
import ArticlesList, { ArticleListSkeleton } from '../article/ArticlesList'
import styled from 'styled-components'
import HomeHero from './HomeHero'

const PageWrap = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding-bottom: 8rem;
`

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.color.secondaryDark};
  margin: 0 3rem;
`

const ArticlesHeader = styled.div`
  padding: 3.6rem 3rem 2.4rem;
  display: flex;
  align-items: baseline;
  gap: 1.4rem;
`

const Eyebrow = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
`

const SectionTitle = styled.h2`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.text};
  margin: 0;
`

const Home = () => {
  const { showArticles, showLoading, articles } = useInHome()

  return (
    <PageWrap>
      <HomeHero />
      <Divider />
      <ArticlesHeader>
        <Eyebrow>Writing</Eyebrow>
        <SectionTitle>Articles</SectionTitle>
      </ArticlesHeader>
      {showLoading && <ArticleListSkeleton count={6} />}
      {showArticles && <ArticlesList articles={articles} />}
    </PageWrap>
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
