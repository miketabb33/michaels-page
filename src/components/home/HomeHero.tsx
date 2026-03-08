import React from 'react'
import styled, { css } from 'styled-components'
import Image from '../m-blocks/Image'
import { MichaelTabb } from '../profile/Profile'
import Icon from '../m-blocks/Icon'
import { tabLandAndUp } from '../../styles/Responsive'

const HeroSection = styled.section`
  padding: 5rem 3rem 4rem;
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;

  ${tabLandAndUp(css`
    flex-direction: row;
    align-items: center;
    gap: 5rem;
    padding: 6rem 3rem 5rem;
  `)}
`

const PhotoWrap = styled.div`
  flex-shrink: 0;
`

const Portrait = styled(Image).attrs({ imageName: 'portrait' })`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  box-shadow:
    0 0 0 3px ${({ theme }) => theme.color.splash},
    0 0 0 5px ${({ theme }) => theme.color.primary},
    0 8px 40px ${({ theme }) => theme.color.hover};

  ${tabLandAndUp(css`
    width: 16rem;
    height: 16rem;
  `)}
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const Greeting = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
`

const HeroName = styled.h1`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(3.8rem, 6vw, 6.4rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
`

const HeroTitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.65;
  margin: 0;
`

const HeroTagline = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.65rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.55;
  max-width: 52rem;
  margin: 0.4rem 0 0;
`

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.8rem;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 0.8rem;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.65;
  transition: all 0.15s ease;

  &:hover {
    opacity: 1;
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.hover};
    transform: translateY(-1px);
  }
`

const SocialIcon = styled(Icon)`
  width: 1.6rem;
  height: 1.6rem;
`

const HomeHero = () => (
  <HeroSection>
    <PhotoWrap>
      <Portrait />
    </PhotoWrap>
    <TextContent>
      <Greeting>Hey, I'm</Greeting>
      <HeroName>{MichaelTabb.name}</HeroName>
      <HeroTitle>{MichaelTabb.title}</HeroTitle>
      <HeroTagline>
        I build software. AI-driven iteration has taken my productivity to a whole new level. I write every line, follow every decision, and ship a lot more of it.
      </HeroTagline>
      <SocialRow>
        <SocialLink href="https://www.linkedin.com/in/michael-tabb-24b34488/" target="_blank" rel="noreferrer">
          <SocialIcon iconName="linkedin" />
          LinkedIn
        </SocialLink>
        <SocialLink href="https://github.com/miketabb33" target="_blank" rel="noreferrer">
          <SocialIcon iconName="github" />
          GitHub
        </SocialLink>
        <SocialLink href="https://humaniz.io/" target="_blank" rel="noreferrer">
          <SocialIcon iconName="humaniz" />
          Humaniz
        </SocialLink>
        <SocialLink href={`mailto:${MichaelTabb.email}`}>
          {MichaelTabb.email}
        </SocialLink>
      </SocialRow>
    </TextContent>
  </HeroSection>
)

export default HomeHero
