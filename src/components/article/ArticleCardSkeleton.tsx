import React from 'react'
import Card, { CardContent } from '../m-blocks/Card'
import styled from 'styled-components'
import { ARTICLE_CARD_HEIGHT } from './ArticleCard'
import { Skeleton } from '../m-blocks/Skeleton'

type StyledSkeletonProps = {
  $width: string
}

const Container = styled.div`
  height: ${ARTICLE_CARD_HEIGHT};
`

const ImageSkeleton = styled.div`
  aspect-ratio: 1.7799;
  ${Skeleton}
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
`

const TitleSkeleton = styled.div<StyledSkeletonProps>`
  height: 3.5rem;
  width: ${({ $width }) => $width};
  ${Skeleton}
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`

const DescriptionSkeleton = styled.div<StyledSkeletonProps>`
  height: 2rem;
  width: ${({ $width }) => $width};
  ${Skeleton}
`

const DateSkeleton = styled.div`
  height: 1rem;
  width: 20%;
  ${Skeleton}
`

const ArticleCardSkeleton = () => {
  return (
    <Container>
      <Card>
        <ImageSkeleton />
        <CardContent>
          <TitleContainer>
            <TitleSkeleton $width="100%" />
            <TitleSkeleton $width="80%" />
          </TitleContainer>
          <DescriptionContainer>
            <DescriptionSkeleton $width="100%" />
            <DescriptionSkeleton $width="69%" />
          </DescriptionContainer>
          <DateSkeleton />
        </CardContent>
      </Card>
    </Container>
  )
}

export default ArticleCardSkeleton
