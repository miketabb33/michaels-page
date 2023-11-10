import { ArticleMeta } from '../../../src/network/articleClient'

export const ARTICLE_META_MOCK_1: ArticleMeta = {
  title: 'Article 1',
  path: 'article1.md',
  slug: 'article1',
  description: 'article1 description',
  thumbnailUrl: 'article1.jpg',
  createdOn: 'February 13th, 1990',
}
export const ARTICLE_META_MOCK_2: ArticleMeta = {
  title: 'Article 2',
  path: 'article2.md',
  slug: 'article2',
  description: 'article2 description',
  thumbnailUrl: 'article2.jpg',
  createdOn: 'February 14th, 1990',
}
export const ARTICLE_META_MOCK_3: ArticleMeta = {
  title: 'Article 3',
  path: 'article3.md',
  slug: 'article3',
  description: 'article2 description',
  thumbnailUrl: 'article2.jpg',
  createdOn: 'February 15th, 1990',
}

export const ARTICLES_META_MOCK = [ARTICLE_META_MOCK_1, ARTICLE_META_MOCK_2, ARTICLE_META_MOCK_3]
