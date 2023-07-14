import React from 'react'
import H1 from '../m-blocks/typography/H1'
import H3 from '../m-blocks/typography/H3'
import styled from 'styled-components'
import List, { ListItem } from '../m-blocks/List'
import Spacer from '../m-blocks/Spacer'

const Bold = styled.strong`
  font-weight: 700;
  color: ${({ theme }) => theme.staticColor.blue_600};
`

const Section = styled.section<{ delay: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};

  animation: slide 0.6s;
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => `${delay}s`};
  animation-timing-function: cubic-bezier(0.23, 0.23, 0.37, 1.32);

  opacity: 0;

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
export const WhatIDoHome = () => {
  return (
    <Section delay={0}>
      <H1>What I Do:</H1>
      <H3>
        I provide <Bold>Software Delivery Services</Bold> and <Bold>Strategic Consulting</Bold> to empower organizations
        to gain a competitive edge and deliver exceptional value to their customers.
      </H3>
    </Section>
  )
}

export const IndustryKnowledgeHome = () => {
  return (
    <Section delay={0.2}>
      <H1>Industry Knowledge:</H1>
      <H3>
        Throughout my career, I have successfully delivered software solutions and provided consulting services across a
        diverse range of industries.
      </H3>
      <List>
        <ListItem>Communications</ListItem>
        <ListItem>Digital Art Creation</ListItem>
        <ListItem>E-Commerce</ListItem>
        <ListItem>Education</ListItem>
        <ListItem>Entertainment</ListItem>
        <ListItem>Finance</ListItem>
        <ListItem>Fitness</ListItem>
        <ListItem>Medical</ListItem>
      </List>
    </Section>
  )
}

export const TechnicalExpertiseHome = () => {
  return (
    <Section delay={0.4}>
      <H1>Technical Expertise:</H1>
      <H3>
        I am a versatile software professional experienced in <Bold>multiple programming languages</Bold>, specializing
        in <Bold>React/TypeScript</Bold>, and with a previous emphasis on <Bold>Swift/Xcode</Bold>.
      </H3>
    </Section>
  )
}

export const WhatIValueHome = () => {
  return (
    <Section delay={0.6}>
      <H1>What I value:</H1>
      <H3>Collaboration and Teamwork</H3>
      <List>
        <ListItem>Lean Management</ListItem>
        <ListItem>Customer Collaboration</ListItem>
        <ListItem>Extreme Programming</ListItem>
        <ListItem>Agile Principles</ListItem>
        <ListItem>Setting Expectations</ListItem>
        <ListItem>Crucial Conversations</ListItem>
      </List>
      <Spacer size="small" />
      <H3>Code Quality</H3>
      <List>
        <ListItem>Scalability (Extensibility)</ListItem>
        <ListItem>Reliability</ListItem>
        <ListItem>Code Reusability</ListItem>
        <ListItem>Maintainability (Readability)</ListItem>
        <ListItem>Performance Optimization</ListItem>
      </List>
      <Spacer size="small" />
      <H3>Monitoring and Visibility</H3>
      <List>
        <ListItem>Analytics and Error Logging</ListItem>
        <ListItem>Agile Metrics and Team Performance</ListItem>
        <ListItem>User Feedback</ListItem>
      </List>
      <Spacer size="small" />
      <H3>Healthy Mindset</H3>
      <List>
        <ListItem>Flow State</ListItem>
        <ListItem>Fun</ListItem>
        <ListItem>1% gains</ListItem>
        <ListItem>Structured work day</ListItem>
      </List>
    </Section>
  )
}
