import React from 'react'
import Input, { useWithInput } from '../components/m-blocks/Input'
import { usePage } from './usePage'

const LandingPage = () => {
  usePage({ title: 'Landing' })
  const input = useWithInput({})
  return <Input {...input.bind} />
}

export default LandingPage
