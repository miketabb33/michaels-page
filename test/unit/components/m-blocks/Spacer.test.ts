import { calculateSpace } from '../../../../src/components/m-blocks/Spacer'
import { ThemeSpacing } from '../../../../src/styles/ThemeSpacing'

const THEME_SPACING: ThemeSpacing = {
  xxSmall: 'xxs',
  xSmall: 'xs',
  small: 's',
  medium: 'm',
  large: 'l',
  xLarge: 'xl',
  xxLarge: 'xxl',
}

describe('Calculate Space', () => {
  it('should calculate medium', () => {
    const result = calculateSpace('medium', THEME_SPACING)
    expect(result).toEqual(THEME_SPACING.medium)
  })
  it('should calculate small', () => {
    const result = calculateSpace('small', THEME_SPACING)
    expect(result).toEqual(THEME_SPACING.small)
  })
})
