import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import TextLink from '../components/m-blocks/TextLink'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 3rem 10rem;
`

const Label = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
`

const Title = styled.h1`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(3.2rem, 6vw, 5.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
  margin: 1rem 0 1.6rem;
  line-height: 1.05;
`

const Tagline = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.8rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.7;
  margin: 0 0 2.4rem;
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 3.2rem;
`

const Tag = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 10rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.55;
`

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.9rem 2rem;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.splash};
  border-radius: 0.8rem;
  text-decoration: none;
  transition: opacity 0.15s;
  margin-bottom: 5rem;

  &:hover {
    opacity: 0.85;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.secondaryDark};
  margin: 0 0 4rem;
  opacity: 0.4;
`

const SectionTitle = styled.h2`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.primary};
  margin: 0 0 2rem;
`

const Body = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.72;
  margin: 0 0 1.6rem;
`

const TcgValorPage = () => {
  usePage({
    title: 'TCG Valor',
    description:
      'TCG Valor, a full stack app that tracks your Pokemon card collection and monitors market prices in real time.',
  })
  return (
    <NavLayout>
      <Container>
        <Label>Project</Label>
        <Title>TCG Valor</Title>
        <Tagline>
          A full stack app that tracks your Pokemon card collection and monitors market prices in real time.
        </Tagline>
        <TagRow>
          {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagRow>
        <LinkButton href="https://tcgvalor.com/collection/1" target="_blank" rel="noopener">
          View my collection
        </LinkButton>

        <Divider />

        <SectionTitle>Origin Story</SectionTitle>
        <Body>
          During an early 2024 California visit to see family, my Mother invited me to go through my childhood relics
          she had been storing for over 20 years. Despite the initial reluctance, I agreed. As I opened boxes before me,
          I realized that everything was GOLD.
        </Body>
        <Body>
          Among the childhood jewels was my old Pokemon collection. I opened the binder to the first page, Pokemon 1-9,
          featuring the holographic Charizard. After flipping through and realizing I had collected all but 6 of the
          original 151, my next move was obvious: find the remaining 6 and complete the set.
        </Body>
        <Body>
          In my hunt, I learned that the Pokemon team had been hard at work over the last 20 years. The count was no
          longer 151, it was well over 1000. Six months in and I had acquired many, many more cards.
        </Body>
        <Body>
          After months of collecting I started to wonder: how much is all of this worth? I decided to build a full stack
          app to track my collection and monitor market prices. May I present,{' '}
          <TextLink href="https://tcgvalor.com/">TCG Valor</TextLink>.
        </Body>

        <SectionTitle>How it works</SectionTitle>
        <Body>
          TCG Valor is built around two concepts: the Catalog and the Collection. The Catalog is organized by Pokemon
          card expansions and is used to add cards from your real life collection. The Collection is your digital
          inventory, showing exactly what you own and what it&apos;s worth.
        </Body>
      </Container>
    </NavLayout>
  )
}

export default TcgValorPage
