import React from 'react'
import Markdown from 'markdown-to-jsx'
import H1 from '../m-blocks/typography/H1'
import H2 from '../m-blocks/typography/H2'
import P from '../m-blocks/typography/P'

type MarkdownToArticleBodyProps = {
  markdown: string
}

export const MarkdownToArticleBody = ({ markdown }: MarkdownToArticleBodyProps) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: { component: H1, props: { spacing: { marginBottom: 'l' } } },
          h2: { component: H2, props: { spacing: { marginBottom: 'm', marginTop: 'm' } } },
          p: { component: P },
        },
      }}
    >
      {markdown}
    </Markdown>
  )
}

export default MarkdownToArticleBody
