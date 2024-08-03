const ticTacToeBase = '/tic-tac-toe'

export const PATH_VALUES = {
  home: '/',
  pong: '/pong',
  ticTacToe: {
    base: ticTacToeBase,
    regular: `${ticTacToeBase}/regular`,
    timed: `${ticTacToeBase}/timed`,
    threeD: `${ticTacToeBase}/3d`,
  },
  landing: '/landing',
  myTradingCardWorth: '/my-trading-card-worth',
  article: (slug: string) => `/article/${slug}`,
  recommendedBooks: '/recommended-books',
}
