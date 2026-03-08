export const themeShadow: ThemeShadow = {
  crisp: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)`,
  blur: `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.06)`,
  strong: '0 10px 25px rgba(0,0,0,0.25)',
  soft: '0 1px 3px rgba(0,0,0,0.06)',
}

export type ThemeShadow = {
  crisp: string
  blur: string
  strong: string
  soft: string
}
