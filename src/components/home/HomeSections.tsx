import React from 'react'
import H1 from '../m-blocks/typography/H1'
import styled from 'styled-components'
import UnorderedList from '../m-blocks/UnorderedList'
import Spacer from '../m-blocks/Spacer'
import H4 from '../m-blocks/typography/H4'
import Bold from '../m-blocks/typography/Bold'

const Section = styled.section<{ delay: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};

  animation-name: slide;
  animation-duration: 0.6s;
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
      <H4>
        I provide <Bold>Software Delivery Services</Bold> and <Bold>Strategic Consulting</Bold> to empower organizations
        to gain a competitive edge and deliver exceptional value to their customers.
      </H4>
    </Section>
  )
}

export const IndustryKnowledgeHome = () => {
  return (
    <Section delay={0.2}>
      <H1>Industry Knowledge:</H1>
      <H4>
        Throughout my career, I have successfully delivered software solutions and provided consulting services across a
        diverse range of industries.
      </H4>
      <UnorderedList>
        <li>Communications</li>
        <li>Digital Art Creation</li>
        <li>E-Commerce</li>
        <li>Education</li>
        <li>Entertainment</li>
        <li>Finance</li>
        <li>Fitness</li>
        <li>Medical</li>
      </UnorderedList>
    </Section>
  )
}

export const TechnicalExpertiseHome = () => {
  return (
    <Section delay={0.4}>
      <H1>Technical Expertise:</H1>
      <H4>
        I am a versatile software professional experienced in <Bold>multiple programming languages</Bold>, specializing
        in <Bold>React/TypeScript</Bold>, and with a previous emphasis on <Bold>Swift/Xcode</Bold>.
      </H4>
    </Section>
  )
}

export const WhatIValueHome = () => {
  return (
    <Section delay={0.6}>
      <H1>What I value:</H1>
      <H4>Collaboration and Teamwork</H4>
      <UnorderedList>
        <li>Lean Management</li>
        <li>Customer Collaboration</li>
        <li>Extreme Programming</li>
        <li>Agile Principles</li>
        <li>Setting Expectations</li>
        <li>Crucial Conversations</li>
      </UnorderedList>
      <Spacer size="small" />
      <H4>Code Quality</H4>
      <UnorderedList>
        <li>Scalability (Extensibility)</li>
        <li>Reliability</li>
        <li>Code Reusability</li>
        <li>Maintainability (Readability)</li>
        <li>Performance Optimization</li>
      </UnorderedList>
      <Spacer size="small" />
      <H4>Monitoring and Visibility</H4>
      <UnorderedList>
        <li>Analytics and Error Logging</li>
        <li>Agile Metrics and Team Performance</li>
        <li>User Feedback</li>
      </UnorderedList>
      <Spacer size="small" />
      <H4>Healthy Mindset</H4>
      <UnorderedList>
        <li>Flow State</li>
        <li>Fun</li>
        <li>1% gains</li>
        <li>Structured work day</li>
      </UnorderedList>
    </Section>
  )
}
