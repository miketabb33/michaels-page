import React from 'react'
import App from '../../src/App'
import { shallowRenderer } from '../shallowRenderer'

describe('App', () => {
  it('should match snapshot', () => {
    const renderer = shallowRenderer(<App />)
    expect(renderer).toMatchSnapshot()
  })
})
