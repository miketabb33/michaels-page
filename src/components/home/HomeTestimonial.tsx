import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1.6rem); }
  to   { opacity: 1; transform: translateY(0); }
`

const Wrap = styled.section`
  padding: 4rem 3rem;
`

const Card = styled.div`
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 1.4rem;
  padding: 3rem 3.2rem 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: ${fadeUp} 0.55s cubic-bezier(0.23, 0.23, 0.37, 1.32) 0.1s both;
`

const TopRow = styled.div`
  display: flex;
  align-items: center;
`

const Eyebrow = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.accent};
`

const QuoteText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.8;
  margin: 0;
`

const Attribution = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 0.4rem;
  border-top: 1px solid ${({ theme }) => theme.color.secondaryDark};
`

const Dot = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.accent};
  flex-shrink: 0;
`

const ClientName = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.accent};
`

const ClientRole = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.35;
`

const HomeTestimonial = () => (
  <Wrap>
    <Card>
      <TopRow>
        <Eyebrow>Client Testimonial</Eyebrow>
      </TopRow>
      <QuoteText>
        Working with Michael was an absolute pleasure. He was quick, thorough, and professional throughout the entire
        process and brought great ideas to the table while staying true to our vision for the site. He explained
        everything clearly, making the whole experience seamless. Since launching, we&apos;ve received so much positive
        feedback on the site. We couldn&apos;t be happier and would highly recommend him to anyone looking for a
        talented web developer!
      </QuoteText>
      <Attribution>
        <Dot />
        <ClientName>Buttonwoods Museum</ClientName>
        <ClientRole>· Web Design Client</ClientRole>
      </Attribution>
    </Card>
  </Wrap>
)

export default HomeTestimonial
