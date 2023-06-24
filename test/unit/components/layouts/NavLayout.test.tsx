import React from 'react'

import NavLayout from '../../../../src/components/layouts/NavLayout'
import { shallowRenderer } from '../../../shallowRenderer'

describe('App', () => {
  it('should match snapshot', () => {
    const renderer = shallowRenderer(<NavLayout>AnyLayout</NavLayout>)
    expect(renderer).toMatchSnapshot()
  })
})
