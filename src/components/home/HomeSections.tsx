import React from 'react'
import styled, { css } from 'styled-components'
import { tabLandAndUp } from '../../styles/Responsive'

const Section = styled.section<{ $delay: number }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  animation-name: slide-in;
  animation-duration: 0.6s;
  animation-fill-mode: forwards;
  animation-delay: ${({ $delay }) => `${$delay}s`};
  animation-timing-function: cubic-bezier(0.23, 0.23, 0.37, 1.32);
  opacity: 0;

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SectionLabel = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
`

const SectionTitle = styled.h2`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: clamp(2.6rem, 4vw, 3.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
  line-height: 1.1;
`

const Body = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.65rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.75;
  max-width: 68rem;
  margin: 0;
`

const Highlight = styled.strong`
  color: ${({ theme }) => theme.color.text};
  opacity: 1;
  font-weight: 500;
`

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

const Tag = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0.5rem 1.2rem;
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 10rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.7;
`

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${tabLandAndUp(css`
    grid-template-columns: 1fr 1fr;
  `)}
`

const ValueCard = styled.div`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 1.2rem;
  padding: 2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const ValueCardTitle = styled.h4`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.color.primary};
  margin: 0;
`

const ValueItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const ValueItem = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.65;
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.secondaryDark};
  margin: 0.4rem 0;
  opacity: 0.5;
`

export const WhatIDoHome = () => (
  <Section $delay={0}>
    <SectionLabel>How I work</SectionLabel>
    <SectionTitle>AI-driven iteration,<br />real engineering.</SectionTitle>
    <Body>
      I'm a senior engineer who builds and ships software. I've gone deep on AI-driven development.
      Not as a shortcut, but as a <Highlight>force multiplier</Highlight>. I write every line of code, follow
      every decision, and understand the system end to end. The difference is I now move at a pace
      that would've been impossible a few years ago.
    </Body>
    <Body>
      My productivity has hit a new level. The iteration loops are tighter, the output is higher, and
      the quality hasn't dropped. If anything, it's improved. I'm not just keeping up with AI tooling;
      I'm <Highlight>building with it as a core part of how I work</Highlight>.
    </Body>
  </Section>
)

export const IndustryKnowledgeHome = () => (
  <Section $delay={0.15}>
    <SectionLabel>Industries</SectionLabel>
    <SectionTitle>Shipped across domains.</SectionTitle>
    <Body>
      I've delivered software across a wide range of industries, each one a different set of constraints,
      users, and problems worth solving.
    </Body>
    <TagCloud>
      {['Communications', 'Cultural Institutions', 'Digital Art Creation', 'E-Commerce', 'Education', 'Entertainment', 'Finance', 'Fitness', 'Medical'].map(industry => (
        <Tag key={industry}>{industry}</Tag>
      ))}
    </TagCloud>
  </Section>
)

export const TechnicalExpertiseHome = () => (
  <Section $delay={0.3}>
    <SectionLabel>Stack</SectionLabel>
    <SectionTitle>Multi-language.<br />Adaptable everywhere.</SectionTitle>
    <Body>
      Currently working in <Highlight>Rails + Vue</Highlight>, with a strong background in{' '}
      <Highlight>React + TypeScript</Highlight>, <Highlight>C#</Highlight>, and{' '}
      <Highlight>Swift</Highlight>. I've built across the full stack in multiple languages. The specifics have changed over the years, but the approach hasn't.
    </Body>
    <Body>
      AI tooling is part of my stack too, not as a crutch, but as a genuine accelerant
      for writing, reviewing, and reasoning about code.
    </Body>
    <TagCloud>
      {['Rails', 'Vue', 'React', 'TypeScript', 'C#', 'Swift', 'Ruby', '.NET', 'MongoDB', 'PostgreSQL', 'Node.js', 'HTML / CSS', 'AI Tooling'].map(tech => (
        <Tag key={tech}>{tech}</Tag>
      ))}
    </TagCloud>
  </Section>
)

export const WhatIValueHome = () => (
  <Section $delay={0.45}>
    <SectionLabel>Values</SectionLabel>
    <SectionTitle>What I actually care about.</SectionTitle>
    <Divider />
    <ValueGrid>
      <ValueCard>
        <ValueCardTitle>Team & Process</ValueCardTitle>
        <ValueItems>
          {['Lean Management', 'Customer Collaboration', 'Extreme Programming', 'Agile Principles', 'Setting Expectations', 'Crucial Conversations'].map(v => (
            <ValueItem key={v}>— {v}</ValueItem>
          ))}
        </ValueItems>
      </ValueCard>
      <ValueCard>
        <ValueCardTitle>Code Quality</ValueCardTitle>
        <ValueItems>
          {['Extensibility', 'Reliability', 'Reusability', 'Readability', 'Performance'].map(v => (
            <ValueItem key={v}>— {v}</ValueItem>
          ))}
        </ValueItems>
      </ValueCard>
      <ValueCard>
        <ValueCardTitle>Visibility</ValueCardTitle>
        <ValueItems>
          {['Analytics & Error Logging', 'Agile Metrics', 'User Feedback'].map(v => (
            <ValueItem key={v}>— {v}</ValueItem>
          ))}
        </ValueItems>
      </ValueCard>
      <ValueCard>
        <ValueCardTitle>Mindset</ValueCardTitle>
        <ValueItems>
          {['Flow State', 'Fun', '1% Gains', 'Structured Work Day'].map(v => (
            <ValueItem key={v}>— {v}</ValueItem>
          ))}
        </ValueItems>
      </ValueCard>
    </ValueGrid>
  </Section>
)
