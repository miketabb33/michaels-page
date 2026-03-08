import React from 'react'
import { useRequest } from '../../network/useRequest'
import { ArticleMeta, fetchArticleManifest } from '../../network/articleClient'
import ArticlesList, { ArticleListSkeleton } from '../article/ArticlesList'
import ProfileAndContentLayout from '../layouts/ProvileAndContentLayout'
import styled from 'styled-components'

const SectionHeader = styled.div`
  padding: 0 3rem;
`

const Eyebrow = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
  margin-bottom: 0.6rem;
`

const SectionTitle = styled.h1`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 3.6rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  color: ${({ theme }) => theme.color.text};

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`

const Home = () => {
  const { showArticles, showLoading, articles } = useInHome()

  return (
    <ProfileAndContentLayout>
      <SectionHeader>
        <Eyebrow>Writing</Eyebrow>
        <SectionTitle>
          Latest <span>Articles</span>
        </SectionTitle>
      </SectionHeader>
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
