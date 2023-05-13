import React, { ChangeEvent } from 'react'

type InputProps = {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ onChange, placeholder }: InputProps) => {
  return <input placeholder={placeholder} onChange={onChange} />
}

export default Input
