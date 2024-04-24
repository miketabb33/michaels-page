import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.input`
  width: 100%;
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
  maxLength?: number
  validationOnChange?: (e: ChangeEvent<HTMLInputElement>) => boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

type UseWithInputReturn = {
  bind: ExternalInputProps
  value: string
  clear: () => void
}

export const useWithInput = ({
  placeholder = '',
  maxLength,
  validationOnChange = () => true,
  onChange = () => {},
}: UseWithInput): UseWithInputReturn => {
  const [value, setValue] = useState('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = validationOnChange(e)
    if (isValid) {
      onChange(e)
      setValue(e.target.value)
    }
  }

  return {
    bind: {
      placeholder,
      onChange: onInputChange,
      maxLength,
      value,
    },
    value,
    clear: () => setValue(''),
  }
}

export default Input
