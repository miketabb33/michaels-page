import React from 'react'
import NavLayout from '../components/layouts/NavLayout'
import { usePage } from './usePage'
import { H1, H2, P } from '../components/m-blocks/typography'
import TextLink from '../components/m-blocks/TextLink'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 80rem;
  margin: auto;
  padding: 2rem;
`

const Paragraph = styled(P)`
  text-indent: 4rem;
`

const Title = styled(H1)`
  text-align: center;
`

const LinkText = styled(H2)`
  text-align: center;
`

const MyTradingCardWorthPage = () => {
  usePage({ title: 'My Trading Card Worth' })
  return (
    <NavLayout>
      <Container>
        <LinkToMyTradingCardWorth />
        <Title>The Origin Story of My Trading Card Worth</Title>
        <Paragraph>
          During an early 2024 California visit to see family, my Mother invited me to go through my childhood relics
          that she had been storing for over 20 years. Despite the initial reluctance to rummage through my old
          belongings, I agreed. As I opened boxes before me, I realized that everything was GOLD.
        </Paragraph>
        <Paragraph>
          Among the childhood jewels was my old Pokemon Collection, a hobby that I had grown to dismiss as childish. I
          was in awe. I opened the binder to the first page, can you guess what I was looking at? Thats right, Pokemon
          1-9. Featuring the beloved holographic Charizard. After flipping through the binder and realizing that I had
          collected all but 6 of the original 151 pokemon. My next move was obvious, find the remaining 6 cards and
          complete my collection!
        </Paragraph>
        <Paragraph>
          In my hunt, I learned that the Pokemon Creating Team had been hard at work over the last 20 years. The Pokemon
          count was no longer a mere 151, oh no. The count was well over 1000. To catch em&apos; all would mean that I
          would be embarking on a journey much greater than my childhood self would have ever known. It&apos;s been
          about 6 months since I was reintroduced to my collection and I have acquired MANY MORE Pokemon cards.
        </Paragraph>
        <Paragraph>
          So where am I going with this story? After months of collecting I started to wonder. How much are my Pokemon
          cards worth? I decided to build a full scale website that had my Pokemon card collection and would monitor the
          markets for their prices. I&apos;m proud to say my endeavors were successful. May I present,{' '}
          <TextLink href="https://my-trading-card-worth-server-amd.onrender.com/">My Trading Card Worth!</TextLink>
        </Paragraph>
        <Paragraph>
          My Trading Card Worth is made up of two main concepts. The Catalog and Collection. The Catalog is split by
          Pokemon card expansions. The Catalog is used to add each card thats in your real life Pokemon Collection. The
          Collection is a digital representation of your real collection and is used to see how much your cards are
          worth!
        </Paragraph>
        <LinkToMyTradingCardWorth />
      </Container>
    </NavLayout>
  )
}

const LinkToMyTradingCardWorth = () => {
  return (
    <LinkText>
      <TextLink href="https://my-trading-card-worth-server-amd.onrender.com/">
        Take me to My Trading Card Worth!
      </TextLink>
    </LinkText>
  )
}

export default MyTradingCardWorthPage
