export type TicTacToeId = 'regular' | 'timed' | '3d'

export type TicTacToeCardData = {
  id: TicTacToeId
  imageSource: string
  title: string
  description: string
}

export const ticTacToeData: TicTacToeCardData[] = [
  {
    id: 'regular',
    imageSource: 'https://i.ibb.co/jfm94NS/tic-tac-to-regular.png',
    title: 'Regular Tic Tac Toe',
    description:
      "This game is played on a 3x3 grid, involves two players taking turns marking squares with X or O. The goal is to align three of your marks in a row, column, or diagonal. If the grid fills without a winner, it's a draw, making it a quick yet engaging game.",
  },
  {
    id: 'timed',
    imageSource: 'https://i.ibb.co/52NfjjL/tic-tac-toe-timed.png',
    title: 'Timed Tic Tac Toe',
    description:
      'This game is a variant where players have a limited time. This adds urgency and excitement to the game, requiring quick thinking and strategic planning. The rules remain the same as traditional Tic Tac Toe, but with a time constraint.',
  },
  {
    id: '3d',
    imageSource: 'https://i.ibb.co/93ggYVq/tic-tac-toe-3d.png',
    title: '3D Tic Tac Toe',
    description:
      'This game is a three-dimensional version of the classic game, with a limited time. Players must strategically place their marks in a 3x3x3 grid, aiming to align three in a row vertically, horizontally, or diagonally, all while racing against the clock.',
  },
]
