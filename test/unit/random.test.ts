import { random, randomlyPick } from '../../src/random'

describe('Random', () => {
  it('should return a whole number up to the amount', () => {
    for (let i = 0; i < 5; i++) {
      const result = random(5)
      expect(result >= 0)
      expect(result < 5)
    }
  })
})

describe('Randomly Pick', () => {
  it('should randomly pick an item', () => {
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    for (let i = 0; i < 5; i++) {
      const result = randomlyPick(array)
      expect(array.find((item) => item === result)).not.toBeUndefined()
    }
  })
})
