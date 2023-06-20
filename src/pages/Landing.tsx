import React from 'react'
import Input, { useWithInput } from '../components/m-blocks/Input'

const LandingPage = () => {
  const input = useWithInput({})
  return <Input {...input.bind} />
}

export default LandingPage
