import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.staticColor.gray_300};
`

export type ExternalInputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  maxLength?: number
}

const Input = ({ value, placeholder, onChange, maxLength }: ExternalInputProps) => {
  return <InputWrapper value={value} placeholder={placeholder} onChange={onChange} maxLength={maxLength} />
}

type UseWithInput = {
  placeholder?: string
  validationOnChange?: (e: ChangeEvent<HTMLInputElement>) => boolean
  maxLength?: number
}

type UseWithInputReturn = {
  bind: ExternalInputProps
  value: string
}

export const useWithInput = ({
  placeholder = '',
  validationOnChange = () => true,
  maxLength,
}: UseWithInput): UseWithInputReturn => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = validationOnChange(e)
    if (isValid) setValue(e.target.value)
  }

  return {
    bind: {
      placeholder,
      onChange,
      maxLength,
      value,
    },
    value,
  }
}

export default Input
