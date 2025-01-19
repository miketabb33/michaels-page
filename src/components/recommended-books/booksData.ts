import { uuid } from '../../uuid'

export type RecommendedBookData = {
  id: string
  imageSource: string
  affiliateLink: string
  title: string
  authors: string
  description: string
}

export const books: RecommendedBookData[] = [
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg',
    affiliateLink: 'https://amzn.to/3UTu5nI',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    authors: 'Robert C. Martin',
    description:
      'The book is essential for its practical guidance on writing clear, maintainable code. It emphasizes readability, scalability, and testability, leading to higher-quality software and fostering collaboration among developers.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SY445_SX342_.jpg',
    affiliateLink: 'https://amzn.to/3UVIwrn',
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    authors: 'David Thomas and Andrew Hunt',
    description:
      'The book  is indispensable for its timeless advice on software development. It offers practical strategies, holistic insights, and a pragmatic mindset, empowering developers to excel in their craft.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/71UAsPBdgdL._SY522_.jpg',
    affiliateLink: 'https://amzn.to/44G4lP2',
    title: 'Working Effectively with Legacy Code',
    authors: 'Michael Feathers',
    description:
      'The book is valuable for its practical strategies to modify and improve existing codebases. It equips developers with techniques to navigate and enhance legacy systems, aiding in software maintenance and evolution.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/71A4igyepNL._SY522_.jpg',
    affiliateLink: 'https://amzn.to/4bfsY7o',
    title: 'Accelerate: The Science of Lean Software and DevOps',
    authors: 'Nicole Forsgren PhD, Jez Humble, and Gene Kim',
    description:
      'The book is invaluable for its evidence-based approach to improving software delivery. It offers actionable insights into DevOps and lean practices, enabling organizations to build and scale high-performing teams effectively.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/81c+o9-DetL._SY522_.jpg',
    affiliateLink: 'https://amzn.to/4agdbnx',
    title: 'Release It!: Design and Deploy Production-Ready Software',
    authors: 'Michael Nygard',
    description:
      'The book is invaluable for its insights into designing robust, resilient software systems. It offers practical strategies to ensure production readiness, mitigate risks, and maintain system stability under real-world conditions.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/61Jdrn9cfpL._SY522_.jpg',
    affiliateLink: 'https://amzn.to/3WEyr3q',
    title: 'Extreme Programming Explained: Embrace Change, 2nd Edition',
    authors: 'Kent Beck with Cynthia Andres',
    description:
      'The book is essential for its detailed approach to agile software development. It provides practical techniques for embracing change, fostering collaboration, and delivering high-quality software iteratively and adaptively.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/819gVKYN7HL._SY385_.jpg',
    affiliateLink: 'https://www.amazon.com/Learning-Domain-Driven-Design-Aligning-Architecture/dp/1098100131',
    title: 'Learning Domain-Driven Design: Aligning Software Architecture and Business Strategy',
    authors: 'Vlad Khononov',
    description:
      'This book is a practical guide to aligning software architecture with business needs. It introduces core DDD concepts, fostering collaboration between technical and business teams to model complex domains and build adaptable systems.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/71u2GilahrL._SY522_.jpg',
    affiliateLink: 'https://amzn.to/3UETAYo',
    title: 'Crucial Conversations: Tools for Talking When Stakes are High',
    authors: 'Joseph Grenny, Kerry Patterson, Ron McMillan, Al Switzler, and Emily Gregory',
    description:
      'The book is invaluable for its insights into navigating difficult discussions effectively. It offers practical strategies to communicate with clarity, foster understanding, and achieve positive outcomes in challenging situations.',
  },
  {
    id: uuid(),
    imageSource: 'https://m.media-amazon.com/images/I/61rs3AgOFqL._SY522_.jpg',
    affiliateLink: 'https://amzn.to/3UKyc4i',
    title: 'Fifty Quick Ideas to Improve Your User Stories',
    authors: 'Gojko Adzic, David Evans, and Nikola Korac',
    description:
      'The book is essential for its practical advice on crafting effective user stories. It offers actionable tips and techniques to enhance communication, collaboration, and product development.',
  },
]
