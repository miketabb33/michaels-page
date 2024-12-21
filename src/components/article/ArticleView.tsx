import React from 'react'
import { ArticleMeta, fetchArticle } from '../../network/articleClient'
import { ArticleLayout } from '../m-blocks/Layout'
import H1 from '../m-blocks/typography/H1'
import ArticleBody from './ArticleBody'
import ArticleHeader from './ArticleHeader'
import { useRequest } from '../../network/useRequest'
import Spinner from '../m-blocks/Spinner'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`

type ArticleSuccessProps = {
  articleMeta: ArticleMeta
}

const ArticleView = ({ articleMeta }: ArticleSuccessProps) => {
  const { articleBody, readingTime, showArticleBody, showLoading } = useInArticleView(articleMeta)
  return (
    <ArticleLayout>
      <ArticleHeader articleMeta={articleMeta} readingTime={readingTime} />
      {showArticleBody && <ArticleBody articleBody={articleBody} />}
      {showLoading && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
    </ArticleLayout>
  )
}

export const useInArticleView = (articleMeta: ArticleMeta) => {
  const { data: articleBody, isLoading } = useRequest<string>({ request: () => fetchArticle(articleMeta.path) })

  const getReadingTime = () => {
    if (!articleBody) return null
    const AVG_WORD_SIZE = 4.7
    const AVG_WORDS_READ_PER_MINUTE = 283

    const characterCount = articleBody.length
    const amountOfWords = Math.round(characterCount / AVG_WORD_SIZE)
    const readingTime = Math.round(amountOfWords / AVG_WORDS_READ_PER_MINUTE)

    return readingTime
  }

  return {
    articleBody,
    readingTime: getReadingTime(),
    showLoading: isLoading,
    showArticleBody: !isLoading && !!articleBody,
  }
}

export const ArticleNotFound = () => (
  <ArticleLayout>
    <H1>No Article Found</H1>
  </ArticleLayout>
)

export default ArticleView
