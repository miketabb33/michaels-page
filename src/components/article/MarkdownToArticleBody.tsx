import React from 'react'
import Markdown from 'markdown-to-jsx'
import H1 from '../m-blocks/typography/H1'
import H2 from '../m-blocks/typography/H2'
import P from '../m-blocks/typography/P'
import H3 from '../m-blocks/typography/H3'
import UnorderedList from '../m-blocks/UnorderedList'
import OrderedList from '../m-blocks/OrderedList'
import H4 from '../m-blocks/typography/H4'
import TextLink from '../m-blocks/TextLink'
import Bold from '../m-blocks/typography/Bold'

type MarkdownToArticleBodyProps = {
  markdown: string
}

export const MarkdownToArticleBody = ({ markdown }: MarkdownToArticleBodyProps) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: { component: H1 },
          h2: { component: H2, props: { spacing: { marginTop: 'm' } } },
          h3: { component: H3, props: { spacing: { marginTop: 'm' } } },
          h4: { component: H4, props: { spacing: { marginTop: 'm' } } },
          p: { component: P, props: { spacing: { marginTop: 's' } } },
          ul: { component: UnorderedList, props: { spacing: { marginTop: 'm' } } },
          ol: { component: OrderedList, props: { spacing: { marginTop: 'm' } } },
          a: { component: TextLink },
          strong: { component: Bold },
        },
      }}
    >
      {markdown}
    </Markdown>
  )
}

export default MarkdownToArticleBody
