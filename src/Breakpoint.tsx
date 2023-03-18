export enum Breakpoint {
  mobileS = 320,
  mobileM = 375,
  mobileL = 425,
  tablet = 768,
  laptop = 1024,
  laptopL = 1440,
  desktop = 2560,
}

export const MQ = (breakpoint: Breakpoint) => {
  return `(min-width: ${breakpoint}px)`
}
