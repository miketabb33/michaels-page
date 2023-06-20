import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.staticColor.gray_300};
`

type ExternalInputProps = {
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, onChange }: ExternalInputProps) => {
  return <InputWrapper placeholder={placeholder} onChange={onChange} />
}

type UseWithInput = {
  placeholder?: string
}

type UseWithInputReturn = {
  bind: ExternalInputProps
  value: string
}

export const useWithInput = ({ placeholder = '' }: UseWithInput): UseWithInputReturn => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    bind: {
      placeholder,
      onChange,
    },
    value,
  }
}

export default Input
