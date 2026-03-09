import React from 'react'
import styled, { css } from 'styled-components'
import { tabLandAndUp } from '../../styles/Responsive'
import { PATH_VALUES } from '../../router/pathValues'

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 5rem 3rem 10rem;
`

const Header = styled.div`
  margin-bottom: 5rem;
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
  font-size: clamp(3rem, 5vw, 4.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.color.primary};
  margin: 1rem 0 1.2rem;
  line-height: 1.1;
`

const Subtitle = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.6;
  max-width: 52rem;
  line-height: 1.6;
  margin: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${tabLandAndUp(css`
    grid-template-columns: repeat(2, 1fr);
  `)}
`

const Card = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.8rem;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 1.4rem;
  text-decoration: none;
  transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
    transform: translateY(-3px);
    box-shadow: 0 16px 48px ${({ theme }) => theme.color.hover};
  }
`

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`

const ProjectName = styled.h2`
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.color.text};
  margin: 0;
`

const ExternalIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ opacity: 0.35, flexShrink: 0, marginTop: '0.4rem' }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.5rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.6;
  margin: 0;
  flex: 1;
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const Tag = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.15rem;
  padding: 0.3rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  border-radius: 10rem;
  color: ${({ theme }) => theme.color.text};
  opacity: 0.55;
`

type Project = {
  name: string
  description: string
  tags: string[]
  href: string
  external?: boolean
  rel?: string
}

const projects: Project[] = [
  {
    name: 'TCG Valor',
    description: 'Full stack app that tracks your Pokemon card collection and monitors market prices in real time.',
    tags: ['React', 'TypeScript', 'Node.js', 'Postgres'],
    href: PATH_VALUES.myTradingCardWorth,
  },
  {
    name: 'Pong',
    description: 'A take on the classic arcade game. How high can you score?',
    tags: ['React', 'TypeScript', 'Canvas'],
    href: PATH_VALUES.pong,
  },
  {
    name: 'Tic Tac Toe',
    description: 'Three modes: classic, timed, and 3D. Built to explore game logic and UI state.',
    tags: ['React', 'TypeScript'],
    href: PATH_VALUES.ticTacToe.base,
  },
  {
    name: 'TurnCraft',
    description: 'A turn-based combat game where players battle head-to-head with strategy-driven mechanics.',
    tags: ['JavaScript'],
    href: 'https://turncraft.onrender.com/',
    external: true,
  },
]

const Projects = () => (
  <Container>
    <Header>
      <Label>Work</Label>
      <Title>Things I&apos;ve built.</Title>
      <Subtitle>A mix of side projects and things built just for fun.</Subtitle>
    </Header>
    <Grid>
      {projects.map((project) => (
        <Card
          key={project.name}
          href={project.href}
          target={project.external ? '_blank' : undefined}
          rel={project.external ? project.rel ?? 'noreferrer' : undefined}
        >
          <CardTop>
            <ProjectName>{project.name}</ProjectName>
            {project.external && <ExternalIcon />}
          </CardTop>
          <Description>{project.description}</Description>
          <TagRow>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagRow>
        </Card>
      ))}
    </Grid>
  </Container>
)

export default Projects
