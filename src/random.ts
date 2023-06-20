export const random = (amount: number) => {
  return Math.floor(Math.random() * amount)
}

export const randomlyPick = <T>(array: T[]): T => {
  return array[random(array.length - 1)]
}
