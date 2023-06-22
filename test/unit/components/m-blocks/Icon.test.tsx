import { render } from '@testing-library/react'
import Icon from '../../../../src/components/m-blocks/Icon'
import React from 'react'

describe('Icon', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Icon iconName="rotate" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
